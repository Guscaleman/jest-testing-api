import "reflect-metadata";
import { container } from "tsyringe";
import { CarServices } from "../../car/service";
import { carMock } from "../__mocks__/car.mock";

describe("Unit test: delete car", () => {
	test("delete car should work correctly", async () => {
		const carServices = container.resolve(CarServices);

		await carServices.delete(carMock.id);
	});
});
