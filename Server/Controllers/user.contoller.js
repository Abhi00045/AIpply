import User from '../Model/user.model.js'

export const userPost = async (req , res)=>{
    const newUser = new User(req.body);
    const newUserPosted = await newUser.save();
    res.json(newUserPosted);
}

export const getUser = async (req , res)=>{

    const newUsergetting = await User.find();
    res.json(newUsergetting)
}