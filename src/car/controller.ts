import { Request, Response } from "express";
import { ICar } from "./interface";
import { CarServices } from "./service";
import { inject, injectable } from "tsyringe";

@injectable()
export class CarController {
	constructor(@inject("CarServices") private carServices: CarServices) {}

	async create(req: Request, res: Response): Promise<Response<ICar>> {
		const response = await this.carServices.create(req.body);

		return res.status(201).json(response);
	}

	async getMany(req: Request, res: Response): Promise<Response<ICar[]>> {
		const response = await this.carServices.getMany();

		return res.status(200).json(response);
	}

	async getOne(req: Request, res: Response): Promise<Response<ICar>> {
		const id = req.params.id;

		const response = await this.carServices.getOne(id);

		return res.status(200).json(response);
	}

	async update(req: Request, res: Response): Promise<Response<ICar>> {
		const id = req.params.id;

		const response = await this.carServices.update(req.body, id);

		return res.status(200).json(response);
	}

	async delete(req: Request, res: Response): Promise<Response<void>> {
		const id = req.params.id;

		await this.carServices.delete(id);

		return res.status(204).json();
	}
}
