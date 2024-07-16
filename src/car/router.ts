import { Router } from "express";
import { CarController } from "./controller";
import { validateCarId } from "./middleware";
import { carCreateSchema, carUpdateSchema } from "./schemas";
import { validateBody } from "../@shared/errors/validators/body.validator";
import { container } from "tsyringe";
import { CarServices } from "./service";

export const carRouter = Router();

container.registerSingleton("CarServices", CarServices);
const carController = container.resolve(CarController);

carRouter.post("/", validateBody(carCreateSchema), (req, res) =>
	carController.create(req, res)
);
carRouter.get("/", (req, res) => carController.getMany(req, res));
carRouter.get("/:id", validateCarId, (req, res) =>
	carController.getOne(req, res)
);
carRouter.patch(
	"/:id",
	validateBody(carUpdateSchema),
	validateCarId,
	(req, res) => carController.update(req, res)
);
carRouter.delete("/:id", validateCarId, (req, res) =>
	carController.delete(req, res)
);
