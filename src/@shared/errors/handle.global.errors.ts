import { NextFunction, Request, Response } from "express";
import { BodyValidationError } from "./validation.errors";
import { ApiError } from "./api.error";

export function handleGlobalErrors(
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (error instanceof BodyValidationError) {
		return res.status(error.statusCode).json({ errors: error.errors });
	}
	if (error instanceof ApiError) {
		return res.status(error.statusCode).json({ message: error.message });
	}
	console.log(error);
	return res.status(500).json({ error: "Internal server error" });
}
