import { CreateError } from "../utills/error.js"
import { CreateSuccess } from "../utills/success.js";
import User from '../models/User.js'

export const getAllUsers =async (req,res,next)=>{
   try {
    const users=await User.find();
    return next( CreateSuccess(200,"All Users",users) )
    
   } catch (error) {
    return next(CreateError(500,"Internal server error!"))
    
   }
}


export const getById=async(req,res,next)=>{
    try {
        const user =await User.findById(req.params.id)
        if(!user)
        return next(CreateError(404,"User not Found"));
      return next(CreateSuccess(200,"Single User",user))
    } catch (error) {
        return next(CreateError(500,"Internal server error!"));
        
    }
}