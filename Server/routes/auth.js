import express from "express";
import User from "../models/user.js";
import { OAuth2Client } from "google-auth-library";

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please fill all fields"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    const user = await User.create({
      name,
      email,
      password
    });

    console.log("CREATED USER:", user); 

    res.status(201).json({
      message: "Registration Successful",
      user
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});


router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all fields"
      });
    }

    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Incorrect password"
      });
    }

    res.status(200).json({
      message: "Login Successful",
      user
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});

router.post("/google", async (req, res) => {
  try {
    const { credential } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { name, email, picture, sub } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        googleId: sub,
        profilePicture: picture,
      });
    }

    res.status(200).json({
      message: "Google Login Successful",
      user,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Google Authentication Failed",
    });
  }
});

export default router;