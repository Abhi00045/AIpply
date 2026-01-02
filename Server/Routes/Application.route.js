import express from "express";
import { addNewRole } from "../controllers/ApplicationTracker.controller.js";
// import protect from "../middleware/auth.middleware.js";

const ApplicationRouter = express.Router();

// router.use(protect);

ApplicationRouter.post("/", addNewRole);

export default ApplicationRouter;
