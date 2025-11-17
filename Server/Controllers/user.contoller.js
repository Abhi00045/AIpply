import User from '../Model/user.model.js'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import bcrypt, { hash } from 'bcrypt'
import cookieParser from "cookie-parser";
// app.use(cookieParser());
const saltRounds = 10;

export const userPost = async (req , res)=>{
    
    const { fullname, email ,password, role } = req.body;

     const existingUser = await User.findOne({ email });
    if (existingUser) {
        console.log("Exist");
      return res.status(409).json({ message: "Email already exists" });
    }
   
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
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
    process.env.JWT_SECRET,{expiresIn:'7d'})


    res.status(201).json({
        message: "Signup successful",
        user: {
            id: savedUser._id,
            fullName: savedUser.fullName,
            email: savedUser.email,
            role: savedUser.role
        },
        token
    });
}

//getting login user
export const getUser = async (req , res)=>{

    const {email , password} = req.body;
    try{
        const user = await User.findOne({email});
        //getting done
        if(!user){
            return res.status(409).json("email not found");  //email status 
        }
        bcrypt.compare(password, user.password, function(err, result) {            
           if(result){
             const token = jwt.sign({
                userId: savedUser._id,
                userEmail : savedUser.email
            },
            process.env.JWT_SECRET,{expiresIn:'7d'})

        
            res.status(201).json({
                message: "login Successfull",
                user: {
                    id: savedUser._id,
                    fullName: savedUser.fullName,
                    email: savedUser.email,
                    role: savedUser.role
                },
                token
            });
           }
           else res.status(401).send("invalid password");   //password status
        });


    }catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
}