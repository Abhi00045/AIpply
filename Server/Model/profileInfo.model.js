import mongoose from "mongoose";
import { Schema } from "mongoose";

const EducationSchema = new mongoose.Schema({
  university: { type: String, required: true },
  degree: { type: String, required: true },
  major: { type: String, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
});

const WorkExperienceSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  jobRole: { type: String, required: true },
  location: { type: String },
  startDate: { type: Date },
  endDate:{type: Date},
  description: { type: String },
});



const profileInfoschema = new Schema({

    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    fullName: { type: String , ref: 'User', required: true },
    email: {type: String , ref:'User',required:true},
    countrycode:{type:String , required:true},
    phonenumber:{type:String , required:true , default:"+91"},
    state:{type:String , required:true},
    address: {type:String , required:true},
    skills : {type:[String]},
    about: {type:String },
    workExperience: [WorkExperienceSchema],
    education: [EducationSchema],

},{
    timestamps:true
});


export default mongoose.model("ProfileInfo" , profileInfoschema);
