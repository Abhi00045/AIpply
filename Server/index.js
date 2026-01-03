import express from "express";
import cors from "cors";
import dotenv from "dotenv"; // Recommended for FRONTEND_URL
import { Connection } from "./Connection/connection.js";
import router, { getRouter } from "./Routes/user.router.js";
import ProfileRouter from "./Routes/profileInfo.router.js";
import ApplicationRouter from "./Routes/Application.route.js";
import JobRouter from "./Routes/Jobposting.router.js";

dotenv.config();
const app = express();

// --- MIDDLEWARE ---
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // Fallback for safety
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json()); 

// --- ROUTES ---
app.use("/signup", router);
app.use("/login", getRouter);
app.use("/applicant/api/profile", ProfileRouter);

// MISSING LINK FIXED: Connects your Job Tracker to the backend
app.use("/applicant/api/list", ApplicationRouter);

app.use("/applicant/api/jobs",JobRouter);

// --- SERVER START ---
app.listen(3011, () => {
  Connection();
  console.log("🚀 Server started on http://localhost:3011");
});