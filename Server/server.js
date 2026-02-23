import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./Routes/user.route.js";

import JobRouter from "./Routes/jobPosting.route.js";

import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

/* ================= ROUTES ================= */

app.use("/api/users", router); 
app.use("/api/jobs", JobRouter);
// → /api/users/signup
// → /api/users/login

// app.use("/applicant/api/profile", ProfileRouter);
// app.use("/applicant/api/list", ApplicationRouter);
// app.use("/applicant/jobs", JobRouter);

/* ================= SERVER ================= */

const PORT = process.env.PORT || 3011;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});