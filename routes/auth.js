const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");

// Registar

router.post("/register", async (req, res) => {
  try {
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: CryptoJs.AES.encrypt(
        "Message",
        process.env.PASS_SEC
      ).toString(),
      username: req.body.username,
    };
    const newUser = new User(user);
    const saveUser = await newUser.save();
    console.log(saveUser);
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login Users
router.post("/login", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
