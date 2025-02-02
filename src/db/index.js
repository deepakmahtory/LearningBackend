import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB=async()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGO_DB}/${DB_NAME}`)
        console.log("connectionInstance",connectionInstance);
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('MONGODB connection Failed',error);
        process.exit(1);
    }
}
export default connectDB