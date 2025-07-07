import express from 'express';
import { profilePost } from '../Controllers/profileInfo.controller.js';

const ProfileRouter = express.Router();

ProfileRouter.post('/',profilePost);


export default ProfileRouter;