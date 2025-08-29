import express from "express";
import cors from "cors";
import { Connection } from "./Connection/connection.js";
import router, { getRouter } from "./Routes/user.router.js";
import ProfileRouter from "./Routes/profileInfo.router.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL, // your frontend port
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(cookieParser());
app.use(express.json()); //this is the most important line inthe raw data posting in job portal
app.use("/register", router);
app.use("/login" , getRouter)

// app.use("/profileInfo",ProfileRouter);

app.listen(3011, (req, res) => {
  Connection();
  console.log("server Started");
});
