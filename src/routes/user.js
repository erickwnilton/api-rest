import { Router } from "express";
import { getUsers, postUser } from "../controllers/user.js";

export const userRoutes = Router();

userRoutes.get("/users", getUsers);
userRoutes.post("/users", postUser);