import express from 'express';

const ProfileRouter = express.Router();

ProfileRouter.post('/',profileInfoPost);


export default ProfileRouter;