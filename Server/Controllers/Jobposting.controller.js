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

export const getJobs = async (req, res) => {
  try {

    const jobs = await JobPosting.find();

    if(!jobs || jobs.length === 0){
        return res.status(200).json({
        success: true,
        data: [],
        message: "No jobs found",
      });
    }

    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
      error: err.message,
    });
  }
};
