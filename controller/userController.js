const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel.js");

//desc register user
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userAvailable = await User.findOne({
    email,
  });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`User created: ${user}`);
  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
    });
  }else{
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "User registered successfully" });
});

//desc register user
const loginUser = asyncHandler(async (req, res) => {
  // Logic for user registration
  res.json({ message: "Login User" });
});
//desc current user
const currentUser = asyncHandler(async (req, res) => {
  // Logic for user registration
  res.json({ message: "Current User successfully" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
