const express = require("express");
const router = express.Router();
const { route, post } = require("./ticket.router");
// const { json } = require(express.json());

const { insertUser, getUserByEmail } = require("../model/User.model");
const { hashPassword, comparePassword } = require("../helpers/bcrypt.helper");

const { createAccessJWT, createRefreshJWT } = require("../helpers/jwt.helper");

router.all("/", (req, res, next) => {
  //   res.json({ message: "return from user router" });
  next();
});

//Create new user router
router.post("/", async (req, res) => {
  const { name, company, address, phone, email, password } = req.body;

  try {
    //hash password
    const hashedPass = await hashPassword(password);

    const newUserObj = {
      name,
      company,
      address,
      phone,
      email,
      password: hashedPass,
    };
    const result = await insertUser(newUserObj);
    console.log(result);
    res.json({ message: "New user created", result });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", message: error.message });
  }
});

//User sign in Router
router.post("/login", async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ status: "error", message: "Invalid email or password!" });
  }

  const user = await getUserByEmail(email);
  console.log(user);

  const passwordFromDB = user && user._id ? user.password : null;

  if (!passwordFromDB) {
    return res.json({ status: "error", message: "Invalid password or email!" });
  }

  const result = await comparePassword(password, passwordFromDB);
  console.log(result);

  if (!result) {
    return res.json({ status: "error", message: "Invalid email or password!" });
  }
  const accessJWT = await createAccessJWT(user.email);
  const refreshJWT = await createRefreshJWT(user.email);

  res.json({ status: "success", message: "Login Successfully!", accessJWT, refreshJWT });
});

module.exports = router;
