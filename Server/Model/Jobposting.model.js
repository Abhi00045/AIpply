import mongoose from "mongoose";
import { Schema } from "mongoose";

const JobpostingSchema = new mongoose.Schema(
    {
       title:{
        type:String,
        required:true
       },
       company: {
         type: String,
         required: true
        },
        companyEmail:{
            type:String,
        },
        Location:{
            type:String,
            require:true
        },
        skills:{
            type:[],
            require:true
        },
        createdAt :{type:Date , default:Date.now}
    }
)