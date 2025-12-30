import express from "express";
import { addNewRole } from "../controllers/application.controller.js";
import protect from "../middleware/auth.middleware.js";

const ApplicationRouter = express.Router();

router.use(protect);

router.post("/", addNewRole);

export default ApplicationRouter;
