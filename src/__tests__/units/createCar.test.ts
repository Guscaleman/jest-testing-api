import "reflect-metadata";
import { container } from "tsyringe";
import { CarServices } from "../../car/service";
import { carCreateBodyMock, carMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: create car", () => {
	test("create car should work correctly", async () => {
		const carServices = container.resolve(CarServices);

		prismaMock.car.create.mockResolvedValue(carMock);
		const data = await carServices.create(carCreateBodyMock);

		expect(data).toBe(carMock);
	});
});
