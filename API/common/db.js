import mongoose from "mongoose";
import { DB_URL } from "./util.js";
export const connectDB=async()=>{
    try {
        await mongoose.connect(DB_URL);
        console.log("Database Connected");
    } catch (error) {
        
    }
}