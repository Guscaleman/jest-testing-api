import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { ApiError } from "../@shared/errors/api.error";

export async function validateCarId(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const carId = req.params.id;

	const findId = await prisma.car.findUnique({
		where: { id: carId },
	});

	if (!findId) {
		throw new ApiError("Car not found.", 404);
	}

	next();
}
