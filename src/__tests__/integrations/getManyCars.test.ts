import { prisma } from "../../database/prisma";
import { carCreateBodyListMock } from "../__mocks__/car.mock";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: get many cars", () => {
	test("should be able to list all cars successfully", async () => {
		await prisma.car.createMany({ data: carCreateBodyListMock });

		const data = await request
			.get("/cars")
			.expect(200)
			.then((response) => response.body);

		expect(data).toHaveLength(2);

		expect(data[0].id).toBeDefined();
		carDefaultExpects(data[0], carCreateBodyListMock[0]);

		expect(data[1].id).toBeDefined();
		carDefaultExpects(data[1], carCreateBodyListMock[1]);
	});
});
