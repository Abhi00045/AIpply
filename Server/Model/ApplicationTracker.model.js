import mongoose from "mongoose";
const { Schema } = mongoose;

const ApplicationSchema = new Schema({
  // Link to the user who owns this application
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true // Optimized for "find by user" queries
  },
  company: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['Applied', 'Interviewed', 'Offer', 'Waitlisted', 'Rejected'],
    default: 'Applied'
  },
  // Renamed from appliedDate to 'date' to match your React job.date
  date: {
    type: String, 
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
  // Renamed from resumeName to 'resume' to match your React job.resume
  resume: {
    type: String,
    default: null
  },
  // Keep this for when you implement actual file storage later
  resumeUrl: {
    type: String,
    default: null
  }
}, { 
  timestamps: true 
});

// Using "ApplicationInfo" as requested
export default mongoose.model("ApplicationInfo", ApplicationSchema);