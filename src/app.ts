import "express-async-errors";
import "reflect-metadata";
import express, { json } from "express";
import { carRouter } from "./car/router";
import { handleGlobalErrors } from "./@shared/errors/handle.global.errors";

export const app = express();

app.use(json());

app.use("/cars", carRouter);

app.use(handleGlobalErrors);
