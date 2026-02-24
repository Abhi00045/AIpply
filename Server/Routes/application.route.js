import express from "express";

import { addNewRole, getApplications,updateApplication, deleteApplication } from "../Controllers/applications.controller.js";

const ApplicationRouter = express.Router();

ApplicationRouter.post("/", addNewRole);
ApplicationRouter.get("/", getApplications);
ApplicationRouter.put("/:id", updateApplication);
ApplicationRouter.delete("/:id", deleteApplication);

export default ApplicationRouter;