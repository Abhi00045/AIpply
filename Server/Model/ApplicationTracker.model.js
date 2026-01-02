import mongoose from "mongoose";
import { Schema } from "mongoose";

const ApplicationSchema = new mongoose.Schema({

    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  company: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: ''
  },
  // bruh
  status: {
    type: String,
    enum: ['Applied', 'Interviewed', 'Offer', 'Waitlisted', 'Rejected'], // Matches your React cycle
    default: 'Applied'
  },
  appliedDate: {
    type: String, // Matches your frontend toLocaleDateString
    default: () => new Date().toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  },
  salary: {
    type: String,
    default: ''
  },
  resumeName: {
    type: String, // Stores the file name
    default: null
  },
  resumeUrl: {
    type: String, // Stores the actual path/link
    default: null
  }
}, { 
  timestamps: true // Automatically adds createdAt and updatedAt
});

export default mongoose.model("ApplicationInfo",ApplicationSchema);