import { Router } from "express";
import { getUsers } from "../controllers/user.js";

export const userRoutes = Router();

userRoutes.get("/users", getUsers);