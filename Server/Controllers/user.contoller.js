import User from '../Model/user.model.js'

export const userPost = async (req , res)=>{
    const newUser = new User(req.body);
    const newUserPosted = await newUser.save();
    res.json(newUserPosted);
}