import express from "express";
import { addNewJob, getJobs } from "../Controllers/jobPosting.controller.js";

const JobRouter = express.Router();

JobRouter.post("/", addNewJob);
JobRouter.get("/", getJobs);

export default JobRouter;