const { exists } = require("../models/Users");
const User = require("../models/Users");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

// Register endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password, userType } = req.body;
    // Check if name is entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    // Check if userType entered
    if (!userType) {
      return res.json({
        error: "userType is required",
      });
    }
    // Check for a valid password
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }
    // Check email
    const exists = await User.findOne({ email: email });
    if (exists) {
      return res.json({
        error: "Email is already taken",
        exists,
      });
    }

    const hashedPassword = await hashPassword(password);
    // Create User in the database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      userType,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.json({
      error: "Something went wrong",
      error,
    });
  }
};

// Login API endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    // Check if password matches
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json({user});
        }
      );
    } else {
      res.json({
        error: "Passwords do not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
