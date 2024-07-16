import { prisma } from "../../database/prisma";
import { carCreateBodyMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration test: get one car", () => {
	test("should be able to get a car by id successfully", async () => {
		const car = await prisma.car.create({ data: carCreateBodyMock });

		const data = await request
			.get(`/cars/${car.id}`)
			.send(carCreateBodyMock)
			.expect(200)
			.then((response) => response.body);

		expect(data.id).toBeDefined();
		expect(data).toStrictEqual(car);
	});

	test("should throw an error when car id is invalid", async () => {
		const data = await request
			.delete("/cars/7f4c411d-7e49-4671-bff0-28f5bfb62313")
			.expect(404)
			.then((response) => response.body);

		expect(data.message).toBe("Car not found.");
	});
});
