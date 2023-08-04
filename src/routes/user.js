import { Router } from "express";
import { getUsers, postUser, updateUser } from "../controllers/user.js";

export const userRoutes = Router();

userRoutes.get("/users", getUsers);
userRoutes.post("/users", postUser);
userRoutes.put("/users/:id", updateUser);