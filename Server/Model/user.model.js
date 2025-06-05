import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:     { type: String, enum: ['jobseeker', 'recruiter'], required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User" , userSchema);