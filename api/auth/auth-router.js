const express = require("express");
const User = require("../users/users-model.js");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/register", async (req, res, next) => {
  const { username, password, first_name, last_name, email } = req.body;
  const hashed = bcrypt.hashSync(password, 10);

  try {
    const newUser = await User.add({
      username,
      password: hashed,
      first_name,
      last_name,
      email,
    });
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const allegedUser = await User.findBy({ username }).first();
    if (allegedUser && bcrypt.compareSync(password, allegedUser.password)) {
      req.session.user = allegedUser;
      res.json({ message: "Your Login Was Successful!" });
    } else {
      res
        .status(401)
        .json({ message: "invalid credentials, please try again" });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/logout", (req, res) => {
  if (req.session && req.session.user) {
    req.session.destroy((err) => {
      if (err) {
        res.json({ message: "you cannot leave" });
      } else {
        res.json({ message: "See you Late, Your Logout was successful" });
      }
    });
  } else {
    res.end();
  }
});

module.exports = router;
