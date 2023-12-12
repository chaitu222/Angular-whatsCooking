import Role from '../models/Role.js'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import { CreateError } from '../utills/error.js';
import { CreateSuccess } from '../utills/success.js';
export const register = async(req,res,next)=>{
   const role = await Role.find({role:'User'});
   const salt = await bcrypt.genSalt(12);
   const hashpassword=await bcrypt.hash(req.body.password,salt)
     const newUser= new User({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        userName:req.body. userName,
        email: req.body.email,
        password:hashpassword,
        roles:role
     })
     await newUser.save();
     return next(CreateSuccess(200,"User Registered successfully"))
}

export const registerAdmin = async(req,res,next)=>{
    const role = await Role.find({});
    const salt = await bcrypt.genSalt(12);
    const hashpassword=await bcrypt.hash(req.body.password,salt)
      const newUser= new User({
         firstName: req.body.firstName,
         lastName:req.body.lastName,
         userName:req.body. userName,
         email: req.body.email,
         password:hashpassword,
         isAdmin:true,
         roles:role
      })
      await newUser.save();
      return next(CreateSuccess(200,"Admin Registered successfully"))
 }


export const login =async(req,res,next)=>{
    try {
     const user = await User.findOne({email: req.body.email})
     .populate("roles","role")

     const{roles}=user;
     if(!user){
        return res.status(404).json("User Not Found")
     }
     const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
    if(!isPasswordCorrect){
        return res.status(400).json("Password incorrect");
    }
    const token = jwt.sign(
        {id: user.id, isAdmin: user.isAdmin, roles: roles},
        process.env.JWT_SECRET
    )
    res.cookie("access_token",token,{httpOnly:true})
    .status(200)
    .json({
        status:200,message:"Login Success",
        data:user
    })
    } catch (error) {
        return res.status(500).json("something went wrong")
        
    }
}