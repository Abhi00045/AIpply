import profileInfo from "../Model/profileInfo.model.js";

export const profilePost = async(req ,res)=>{

    const newProfile = new profileInfo(req.body);
    const newprofilePosted = await newProfile.save();
    res.json(newprofilePosted);

}