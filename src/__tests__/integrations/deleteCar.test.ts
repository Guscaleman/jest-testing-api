import { prisma } from "../../database/prisma";
import { carCreateBodyMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration test: delete car", () => {
	test("should be able to delete a car successfully", async () => {
		const car = await prisma.car.create({ data: carCreateBodyMock });

		await request.delete(`/cars/${car.id}`).expect(204);
	});

	test("should throw an error when car id is invalid", async () => {
		const data = await request
			.delete("/cars/7f4c411d-7e49-4671-bff0-28f5bfb62313")
			.expect(404)
			.then((response) => response.body);

		expect(data.message).toBe("Car not found.");
	});
});
