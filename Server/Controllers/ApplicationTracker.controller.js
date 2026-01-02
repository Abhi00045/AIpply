import User from "../Model/user.model.js";
import ApplicationInfo from '../Model/ApplicationTracker.model.js';

// 1. ADD NEW ROLE
export const addNewRole = async (req, res) => {
  try {
    const { userEmail } = req.body;

    // Find user by email to get their ObjectId
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create application linked to the userId
    const newApplication = await ApplicationInfo.create({
      userId: user._id,
      company: "",
      position: "",
      salary: "",
      status: "Applied",
      // date is handled by the schema default
    });

    res.status(201).json(newApplication);
  } catch (error) {
    res.status(500).json({
      message: "Failed to add new role",
      error: error.message,
    });
  }
};

// 2. GET ALL ROLES (For the specific logged-in user)
export const getApplications = async (req, res) => {
  try {
    const { userEmail } = req.params;
    const user = await User.findOne({ email: userEmail });
    
    if (!user) return res.status(404).json({ message: "User not found" });

    // Find all applications for this user, newest first
    const applications = await ApplicationInfo.find({ userId: user._id }).sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
};

// 3. UPDATE ROLE (For your bottom-line inputs and status cycle)
export const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updated = await ApplicationInfo.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true } // Returns the updated document
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message });
  }
};

// 4. DELETE ROLE
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    await ApplicationInfo.findByIdAndDelete(id);
    res.status(200).json({ message: "Application deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error: error.message });
  }
};