import { ICar, ICreateCar } from "../../car/interface";

export const carDefaultExpects = (data: ICar, expectData: ICreateCar) => {
	expect(data.name).toBe(expectData.name);
	expect(data.brand).toBe(expectData.brand);
	expect(data.year).toBe(expectData.year);
	expect(data.km).toBe(expectData.km);
	expect(data.description).toBe(expectData.description);
};
