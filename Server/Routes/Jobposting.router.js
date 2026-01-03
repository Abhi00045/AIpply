// import { Router } from "express";
import express from "express";
import { addNewJob } from "../Controllers/Jobposting.controller.js";

const JobRouter = express.Router();

JobRouter.post("/", addNewJob);


export default JobRouter;