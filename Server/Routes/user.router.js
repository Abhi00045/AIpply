import express from "express";
import { userPost } from "../Controllers/User.contoller";

const router = express.Router();

router.post('/' , userPost);

