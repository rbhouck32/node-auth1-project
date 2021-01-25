const express = require("express");
const User = require("./auth-model.js");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/register", (req, res) => {
  const { username, password } = req.body;
});

module.exports = router;
