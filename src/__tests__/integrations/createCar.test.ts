import { carCreateBodyMock, invalidCarData } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: create car", () => {
	test("should be able to create a car successfully", async () => {
		const data = await request
			.post("/cars")
			.send(carCreateBodyMock)
			.expect(201)
			.then((response) => response.body);

		expect(data.id).toBeDefined();
		carDefaultExpects(data, carCreateBodyMock);
	});

	test("should return an error if create a car with invalid data", async () => {
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
