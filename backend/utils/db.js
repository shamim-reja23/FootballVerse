import mongoose from "mongoose";


const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('mongodb connected successfully.');
    } catch (error) {
        console.error("MongoDB conection failed: ", error);
        throw(error);
    }
}

export default connectDB;