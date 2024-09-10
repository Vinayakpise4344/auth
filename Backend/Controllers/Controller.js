const bcrypt = require('bcrypt')
const userModel = require("../Models/users");
const jwt = require('jsonwebtoken')

const signup = async(req,res)=>{
  try{
   const {name,password,email} =req.body;
   const user = await userModel.findOne({email});
   if(user){
    return res.status(400)
    .json({message:'user already exists,you can login' , sucess:false})
   }
   const usermodel = new userModel({name,email,password});
   usermodel.password = await bcrypt.hash(password,10);
   await usermodel.save();
   res.status(201)
   .json({message:"signup sucessfuully",
    sucess:true
   }) 
} catch(err){
    res.status(500)
    .json({message:"internal server error",
     sucess:false
    
    }) 
    console.log(err);
  } 
}
const login = async(req,res)=>{
    try{
     const {email,password} =req.body;
     const user = await userModel.findOne({email});
     const errormess = 'Auth failed email or password is wrong';
     if(!user){
      return res.status(403)
      .json({message:errormess, sucess:false})
     }
     const ispasseql = await bcrypt.compare(password,user.password)
     if(!ispasseql){
        return res.status(403)
        .json({message:errormess, sucess:false})
     }
     const jwttoken= jwt.sign(
        {email: user.email, _id: user._id},
        process.env.JWT_SECRET,
        {expiresIn:'24h'}
)
     res.status(200)
     .json({
      message:"login sucessfuully",
      sucess:true,
      jwttoken,
      email,
      name:user.name
     }) 
     
  } catch(err){
      res.status(500)
      .json({message:"internal server error",
       sucess:false
      
      }) 
      console.log(err);
    } 
  }
module.exports = {
    signup,
    login
}