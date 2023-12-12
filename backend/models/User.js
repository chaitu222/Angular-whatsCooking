import mongoose, { Schema } from "mongoose";
import Role from "./Role.js";

const UserSchema= mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        userName:{
            type:String,
            required:true,
            unique: true
        },
        email:{
            type:String,
            required:true,
            unique: true
        },
        password:{
            type:String,
            required:true
        },
        isAdmin:{
            type: Boolean,
            default: false
        },
        roles: {
            type: [Schema.Types.ObjectId],
            required: true,
            ref: "Role"
        }
    },
    {
        timestamps: true
    }
);
export default mongoose.model("User",UserSchema);

