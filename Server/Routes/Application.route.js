import express from "express";
import { 
  addNewRole, 
  getApplications, 
  updateApplication, 
  deleteApplication 
} from "../controllers/ApplicationTracker.controller.js";

const ApplicationRouter = express.Router();

// 1. ADD: POST http://localhost:3011/api/list/
ApplicationRouter.post("/", addNewRole);

// 2. GET: GET http://localhost:3011/api/list/:userEmail
// Fetches all applications for the specific logged-in user
ApplicationRouter.get("/:userEmail", getApplications);

// 3. UPDATE: PUT http://localhost:3011/api/list/:id
// Handles the bottom-border input changes and status cycles
ApplicationRouter.put("/:id", updateApplication);

// 4. DELETE: DELETE http://localhost:3011/api/list/:id
// Triggered by the trash icon
ApplicationRouter.delete("/:id", deleteApplication);

export default ApplicationRouter;