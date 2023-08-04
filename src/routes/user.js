import { Router } from "express";

export const userRoutes = Router();

userRoutes.get("/users", (req, res) => {
  res.send('users')
})