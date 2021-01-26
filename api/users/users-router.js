const express = require("express");
const { authMiddleware } = require("../auth/auth-middleware.js");
const Users = require("./users-model.js");
const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
