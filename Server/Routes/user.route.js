import express from "express";
import { getUser, userPost } from "../Controllers/user.contoller.js";

const router = express.Router();

// SIGNUP
router.post("/signup", userPost);

// LOGIN
router.post("/login", getUser);

export default router;