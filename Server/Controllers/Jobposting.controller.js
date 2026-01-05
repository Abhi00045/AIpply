import JobPosting from "../Model/Jobposting.model.js";

export const addNewJob = async (req, res) => {
  try {
    const newPosting = await JobPosting.create({
      role: req.body.role,
      company: req.body.company,
      companyEmail: req.body.companyEmail,
      location: req.body.location,
      experience: req.body.experience,
      type: req.body.type,
      skills: req.body.skills,
      description: req.body.description,
      logo: req.body.logo || null,
    });

    res.status(201).json(newPosting);
  } catch (err) {
    res.status(500).json({
      message: "Failed to add job",
      error: err.message,
    });
  }
};
