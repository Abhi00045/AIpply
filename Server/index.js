import express from "express";
import { Connection } from "./Connection/connection.js";

const app = express();


app.listen("2020" , (req , res)=>{
    Connection();
    console.log("server Started");
})
// app.get("/",(req , res)=>{
//     res.send("hii")
// })