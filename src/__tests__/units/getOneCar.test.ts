import "reflect-metadata";
import { CarServices } from "../../car/service";
import { carListMock, carMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";
import { container } from "tsyringe";

describe("Unit test: get one car", () => {
	test("get one car should work correctly", async () => {
		const carServices = container.resolve(CarServices);

		prismaMock.car.findUnique.mockResolvedValue(carMock);
		const data = await carServices.getOne(carListMock[0].id);

		expect(data).toBe(carMock);
	});
});
