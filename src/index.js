import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({path:"./env"})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 1212,()=>{
   console.log(`server is running at port : ${process.env.PORT}`);
  })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!",err);
})