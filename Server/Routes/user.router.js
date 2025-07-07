import express from "express";
import { getUser, userPost } from "../Controllers/User.contoller.js";


const router = express.Router();

router.post('/' , userPost);
// router.get('/login',getUser)
export const getRouter = express.Router();
getRouter.get('/',getUser)




export default router;

