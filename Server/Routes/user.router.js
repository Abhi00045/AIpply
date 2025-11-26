import express from "express";
import { getUser, userPost } from "../Controllers/user.contoller.js";
// import { getUser, userPost } from "../Controllers/User.contoller.js"


const router = express.Router();

export const getRouter = express.Router();
getRouter.post('/', getUser)

router.post("/",userPost)

export default router;


