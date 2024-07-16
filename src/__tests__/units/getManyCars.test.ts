import "reflect-metadata";
import { CarServices } from "../../car/service";
import { carListMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { container } from "tsyringe";

describe("Unit test: get many cars", () => {
	test("get many cars should work correctly", async () => {
		prismaMock.car.findMany.mockResolvedValue(carListMock);
		const carServices = container.resolve(CarServices);

		const data = await carServices.getMany();

		expect(data).toHaveLength(carListMock.length);
		carDefaultExpects(data[0], carListMock[0]);
		carDefaultExpects(data[1], carListMock[1]);
	});
});
