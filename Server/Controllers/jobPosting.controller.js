import JobPosting from "../Models/jobPosting.model.js";

export const addNewJob = async (req, res) => {
  try {
    const newPosting = await JobPosting.create({
      role: req.body.role,
      company: req.body.company,
      company_email: req.body.companyEmail,
      location: req.body.location,
      experience: req.body.experience,
      type: req.body.type || "On-site",
      skills: req.body.skills,
      description: req.body.description,
      logo: req.body.logo,
    });

    res.status(201).json({
      success: true,
      data: newPosting,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to add job",
      error: err.message,
    });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await JobPosting.findAll();

    res.status(200).json({
      success: true,
      data: jobs || [],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
      error: err.message,
      });
  }
};