import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    fullName: { type: String, required: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:     { type: String,default:"jobseeker", enum: ['jobseeker', 'recruiter'], required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema)