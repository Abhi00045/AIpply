import express from "express";
import cors from "cors";
import { Connection } from "./Connection/connection.js";
import router, { getRouter } from "./Routes/user.router.js";
import ProfileRouter from "./Routes/profileInfo.router.js";

const app = express();
const corsOptions = {
  origin: process.env.FRONTEND_URL,
};
app.use(cors(corsOptions));
app.use(express.json()); //this is the most important line inthe raw data posting in job portal
app.use("/user", router);
app.use("/login" , getRouter)

app.use("/profileInfo",ProfileRouter);

app.listen(3011, (req, res) => {
  Connection();
  // hii
  console.log("server Started");
});
