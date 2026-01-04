import JobPosting from "../Model/Jobposting.model.js";

export const addNewJob = async  (req, res)=>{
    try{
        const newPosting = await JobPosting.create({
            role: "",
            company: "",
            companyEmail: "",
            location: "",
            experience: "",
            type: "Remote",
        skills: "",
        description: "",
        logo: ""
    })
    res.status(201).json(newPosting);
 }
 catch(err){
    res.status(500).json({
        message: "failed to add job",
        error:err.message,
    });
 }
};