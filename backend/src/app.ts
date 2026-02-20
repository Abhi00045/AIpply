import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from './routes/auth.route'

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // Fallback for safety
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// Test route
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

export default app;