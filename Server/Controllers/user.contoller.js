import User from '../Model/user.model.js'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import bcrypt, { hash } from 'bcrypt'
const saltRounds = 10;

export const userPost = async (req , res)=>{
    
    const { fullname, email ,password, role } = req.body;

     const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
   
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // console.log(hashedPassword);
    

    const newUser = new User({
      fullName: fullname,
      email,
      password: hashedPassword,
      role
    });
    // console.log(newUser);
    
    const savedUser = await newUser.save(); 

    const token = jwt.sign({
        userId: savedUser._id,
        userEmail : savedUser.email
    },
    process.env.JWT_SECRET,
    {
        expiresIn:'7d'
    }
    )
    // console.log(token);
    res.cookie('token' , token);    
}











export const getUser = async (req , res)=>{

    const {email , password} = req.query;
    console.log(email,password);
    

    try{
        const user = await User.findOne({email});

        if(!user){
            return res.json("email not found");
            console.log("error");   
        }

        if(user.password !== password){
            return  res.json("Incorrect password")
        }

        res.json("Login successfully")
    }catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }

}