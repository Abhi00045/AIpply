import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const Connection = async ()=>{

    try{
        const db= process.env.MONGO_URI;
        mongoose.connect(db);
        console.log("DB Connected Successfully");
        
    }catch(err){
        console.log(err);
    }
}