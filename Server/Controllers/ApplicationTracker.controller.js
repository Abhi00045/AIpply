import User from "../models/User.js";
import ApplicationInfo from "../models/ApplicationInfo.js";

export const addNewRole = async (req, res) => {
  try {
    const { userEmail } = req.body;

    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newApplication = await ApplicationInfo.create({
      userId: user._id,
      company: "",
      position: "",
      salary: "",
      status: "Applied",
    });

    res.status(201).json(newApplication);
  } catch (error) {
    res.status(500).json({
      message: "Failed to add new role",
      error: error.message,
    });
  }
};
