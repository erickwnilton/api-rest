import { User } from "../models/user.js";

export function getUsers(req, res) {
  User.findAll().then((result) => { res.status(200).json(result) })
}