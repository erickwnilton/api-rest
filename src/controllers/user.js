import { User } from "../models/user.js";

export function getUsers(req, res) {
  User.findAll().then((result) => { res.status(200).json(result) })
}

export function postUser(req, res) {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone
  })
    .then((result) => { res.json(result) })

}