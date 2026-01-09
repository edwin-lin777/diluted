import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(MONGODB_URI, { dbName: 'companies'});
            console.log("db connected"); 
        }
    } catch (error) {
        console.log(error)

    }
}

export default connectDB;
