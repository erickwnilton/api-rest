import { User } from "../models/user.js";

export async function getUsers(req, res) {
  return await User.findAll().then((result) => { res.status(200).json(result) })
}

export function postUser(req, res) {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone
  })
    .then((result) => { res.status(201).json(result) })

}

export async function updateUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id)

    if (user) {
      await User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
      }, {
        where: {
          id: req.params.id
        },
      })

      return User.findByPk(req.params.id)
        .then((result) => { res.status(200).json(result) })
    }

    return res.status(404).json({
      message: "User not exist"
    })

  } catch (err) {
    return res.status(500).json({
      message: "Server error"
    })
  }
}

export async function deleteUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id)

    if (user) {
      await User.destroy({
        where: {
          id: req.params.id
        }
      });

      return User.findAll().
        then((result) => { res.status(200).json(result) })
    }

    return res.status(404).json({
      message: "User not exists"
    })

  } catch (error) {
    return res.status(500).json({
      message: "Server error"
    })
  }
}