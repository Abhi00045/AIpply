import User from '../Model/user.model.js'

export const userPost = async (req , res)=>{
    const newUser = new User(req.body);
    const newUserPosted = await newUser.save();
    res.json(newUserPosted);
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