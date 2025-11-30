import ProfileInfo from "../Model/profileInfo.model.js";

export const profilePost = async (req, res) => {
  try {
    const {
      userId,
      fullName,
      email,
      countrycode,
      phonenumber,
      state,
      address,
      skills,
      about,
      workExperience,
      education
    } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID missing" });
    }

    const updatedProfile = await ProfileInfo.findOneAndUpdate(
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

        // If workExperience array is sent → update it fully
        ...(workExperience && { workExperience }),
        ...(education && {education} )
      },
      { new: true, upsert: true }
    );

    res.status(200).json(updatedProfile);

  } catch (error) {
    console.error("Profile Save Error:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getprofile = async (req, res)=>{

  
}
