import { prisma } from "../../database/prisma";
import {
	carCreateBodyMock,
	carUpdateBodyMock,
	invalidCarData,
} from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration test: update car", () => {
	test("should be able to update a car successfully", async () => {
		const car = await prisma.car.create({ data: carCreateBodyMock });

		const data = await request
			.patch(`/cars/${car.id}`)
			.send(carUpdateBodyMock)
			.expect(200)
			.then((response) => response.body);

		const newCar = { ...car, ...carUpdateBodyMock };

		expect(data).toStrictEqual(newCar);
	});

	test("should throw an error when car id is invalid", async () => {
		const data = await request
			.patch("/cars/c89e5686-1bb6-4d9d-bb39-f8248fb9b042")
			.expect(404)
			.then((response) => response.body);

		expect(data.message).toBe("Car not found.");
	});

	test("should return an error if update a car with invalid data", async () => {
		const response = await request.post("/cars").send(invalidCarData);

		expect(response.status).toBe(400);
		expect(response.body).toEqual({
			errors: expect.arrayContaining([
				expect.objectContaining({
					message: expect.stringContaining("Expected number, received string"),
					path: ["year"],
				}),
				expect.objectContaining({
					message: expect.stringContaining("Number must be greater than 0"),
					path: ["km"],
				}),
			]),
		});
	});
});
