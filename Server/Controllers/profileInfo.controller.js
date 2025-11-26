import ProfileInfo from "../Model/profileInfo.model.js";

export const profilePost = async (req, res) => {
  try {
    const { userId, fullName, email, countrycode, phonenumber, state, address, skills, about } = req.body;

    console.log("User ID:", userId);

    const profile = await ProfileInfo.findOneAndUpdate(
      { userId },
      {
        fullName,
        email,
        countrycode,
        phonenumber,
        state,
        address,
        skills,
        about,
        userId,
      },
      { new: true, upsert: true }
    );

    res.status(200).json(profile);

  } catch (error) {
    console.error("Profile Save Error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
