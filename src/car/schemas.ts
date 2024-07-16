import { z } from "zod";

export const carSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string().nullable(),
	brand: z.string(),
	year: z.number().int().positive(),
	km: z.number().int().positive(),
});

export const carCreateSchema = carSchema.omit({
	id: true,
});

export const carUpdateSchema = carCreateSchema.partial();
