import mongoose from "mongoose";

const JobPostingSchema = new mongoose.Schema(
  {
    // If you want a custom numerical ID (e.g., index + 1)
    jobId: {
      type: Number,
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    logo: {
      type: String, // URL to the image
      default: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    role: {
      type: String,
      required: [true, "Job role/title is required"],
    },
    companyEmail: {
      type: String,
      lowercase: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    experience: {
      type: String, // e.g., "0–1 years"
      required: true,
    },
    type: {
      type: String, // e.g., "Remote", "Full-time"
      default: "On-site",
    },
    skills: {
      type: [String], // Array of strings is better than just []
      required: true,
    },
    description: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    // This automatically creates 'createdAt' and 'updatedAt' fields
    timestamps: true, 
  }
);

// Export the model
const JobPosting = mongoose.models.JobPosting || mongoose.model("JobPosting", JobPostingSchema);
export default JobPosting;