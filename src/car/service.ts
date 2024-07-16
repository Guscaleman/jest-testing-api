import "reflect-metadata";
import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { ICar, ICreateCar, IUpdateCar } from "./interface";

@injectable()
export class CarServices {
	async create(body: ICreateCar): Promise<ICar> {
		const newCar = await prisma.car.create({ data: body });

		return newCar;
	}

	async getMany(): Promise<ICar[]> {
		const carList = await prisma.car.findMany();

		return carList;
	}

	async getOne(carId: string): Promise<ICar> {
		const car = await prisma.car.findUnique({ where: { id: carId } });

		return car as ICar;
	}

	async update(body: IUpdateCar, updatingId: string): Promise<ICar> {
		const updateCar = await prisma.car.update({
			data: body,
			where: { id: updatingId },
		});

		return updateCar;
	}

	async delete(removingId: string): Promise<void> {
		await prisma.car.delete({ where: { id: removingId } });
	}
}
