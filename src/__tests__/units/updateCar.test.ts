import "reflect-metadata";
import { CarServices } from "../../car/service";
import { carMock, carUpdateBodyMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";
import { container } from "tsyringe";

describe("Unit test: update car", () => {
	test("update car should work correctly", async () => {
		const carServices = container.resolve(CarServices);

		const newCarExpect = { ...carMock, ...carUpdateBodyMock };

		prismaMock.car.update.mockResolvedValue(newCarExpect);
		const data = await carServices.update(carUpdateBodyMock, carMock.id);

		expect(data).toStrictEqual(newCarExpect);
	});
});
