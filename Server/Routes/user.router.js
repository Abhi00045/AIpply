import express from "express";
import { userPost } from "../Controllers/User.contoller.js";

const router = express.Router();

router.post('/' , userPost);

export default router;

