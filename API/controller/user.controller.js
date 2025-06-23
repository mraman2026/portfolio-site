import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt';
export const register=async(req,resp)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return resp.status(400).json({
            message:"Field cannot be empty",
            success:false
        });
    }
    const isPresent=await User.findOne({email});
    if(isPresent){
        return resp.status(400).json({
            message:"User is already present",
            success:false
        });
    }
    const hashpass=await bcrypt.hash(password,10);
    const user=new User({
        name,
        email,
        password:hashpass
    });
    user.save();
    return resp.status(200).json({
        message:"Registred successfully",
        success:true
    });
}

export const login=async(req,resp)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return resp.status(400).json({
            message:"Field cannot be empty",
            success:false
        });
    }
    const user=await User.findOne({email});
    if(!user){
        return resp.status(400).json({
            message:"User is not present",
            success:false
        });
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return resp.status(400).json({
            message:"Username or password does not matched",
            success:false
        }); 
    }
    const{_id,name}=user;
    return resp.status(200).json({
        message:"welcome back",
        id:_id,
        name,
        email,
        success:true
    }); 
    
}