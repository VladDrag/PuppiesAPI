import {Application } from 'express';
import express from "express";
import dotenv from "dotenv";
import { puppiesRouter } from "./src/routes/puppies.routes";

dotenv.config();

const app: Application = express();

app.use("/api/puppies", puppiesRouter);

export default app;
