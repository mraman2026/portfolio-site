import express from 'express';
import { connectDB } from './common/db.js';
import userRoute from './routes/user.route.js';
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config({});
const app=express();
app.use(express.json());

// cors
app.use(cors({
    origin:true,
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))

app.use("/api",userRoute);
const PORT=8000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
});