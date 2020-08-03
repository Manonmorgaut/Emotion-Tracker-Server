const express = require("express");
const router = express.Router();
const UserModel = require("./../models/User");

router.get("/", (req, res, next) => {
  UserModel.find()
    .then((users) => {
      res.status(200).json(users);
      console.log("DB : USERS ==> ", users);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  UserModel.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
      console.log("DB: Current user ==>", user);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
    UserModel
    .create(req.body)
      .then((newUser) => {
        res.status(201).json(newUser);
        console.log("DB: New user ==>", newUser);
      })
      .catch(next);
  });

router.patch("/:id", (req, res, next) => {
    UserModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
      console.log("DB : UPDATED USER ==> ", updatedUser);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  UserModel
    .findByIdAndRemove(req.params.id)
    .then((user) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = router;
