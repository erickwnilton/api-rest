import { Router } from "express";
import { userRoutes } from "./user.js";

export const routes = Router();

routes.use(userRoutes);