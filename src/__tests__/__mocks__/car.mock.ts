export const carMock = {
	id: "dc66a4e6-bbf1-45b3-b3ed-bc8baa7aee24",
	name: "Car name",
	description: "Car description",
	brand: "Card brand",
	year: 2023,
	km: 10000,
};

export const invalidCarData = {
	name: "Car name",
	description: "Car description",
	brand: "Car brand",
	year: "not-a-year",
	km: -5000,
};

export const carCreateBodyMock = {
	name: "Car name",
	description: "Car description",
	brand: "Card brand",
	year: 2023,
	km: 10000,
};

export const carUpdateBodyMock = {
	name: "Updated car name",
	description: "Updated car description",
	brand: "Updated car brand",
	year: 2024,
	km: 12000,
};

export const carCreateBodyListMock = [
	{
		name: "Car name",
		description: "Car description",
		brand: "Card brand",
		year: 2023,
		km: 10000,
	},
	{
		name: "Car name 2",
		description: "Car description 2",
		brand: "Card brand 2",
		year: 2022,
		km: 11000,
	},
];

export const carListMock = [
	{
		id: "dc66a4e6-bbf1-45b3-b3ed-bc8baa7aee24",
		name: "Car name",
		description: "Car description",
		brand: "Card brand",
		year: 2023,
		km: 10000,
	},
	{
		id: "26c7244f-2349-47c9-83c4-0a6a83b4386f",
		name: "Car name 2",
		description: "Car description 2",
		brand: "Card brand 2",
		year: 2022,
		km: 11000,
	},
];
