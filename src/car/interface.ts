import { z } from "zod";
import { carCreateSchema, carSchema, carUpdateSchema } from "./schemas";

export type ICar = z.infer<typeof carSchema>;
export type ICreateCar = z.infer<typeof carCreateSchema>;
export type IUpdateCar = z.infer<typeof carUpdateSchema>;
