import User from "../models/user.js";
import mongoose from "mongoose";

 const add= async (req,res)=>{
    try{
        let exist=await User.findOne({sub : req.body.sub});
        if(exist){
            res.status(200).json(exist);
            return;
        }
        let userData=new User(req.body);
        userData.save();
        res.status(200).json(userData);
    }
   catch(error){
    console.log("error while adding users",error.message);
   }
}


const getUser=async (req,res)=>{
     try{
       let userData= await User.find({});
       res.status(200).json(userData);
     }catch(error){
        console.log("error while fetching data!",error.message);
     }
}

export { add,getUser };