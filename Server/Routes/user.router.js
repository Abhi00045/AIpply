import express from "express";
import { getUser, userPost } from "../Controllers/User.contoller.js";

const router = express.Router();

router.post('/' , userPost);
router.get('/',getUser)

export default router;

