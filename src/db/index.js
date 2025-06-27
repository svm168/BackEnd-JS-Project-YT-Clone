import mongoose from 'mongoose';
import express from "express";
import { DB_NAME } from '../constants.js';      //.js is sometimes required, may give error if extension not included.

const app = express()

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected!!    DB Host: ${connectionInstance.connection.host}`);
        
        app.on('error', (error) => {
            console.log("Error after connection inside try method: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on Port: ${process.env.PORT}`);
        })
    } catch (error) {   //Write meaningful messages in catch method as they help in debugging.
        console.log('MongoDB connection error in catch method (db folder): ', error);
        process.exit(1)     //Process keyword is provided by node itself. It has several exit codes (like 1)
    }                       // Study different exit codes.
}
// I have written some extra stuff. I don't know if they will give any extra issues or not.
// If error occurs review this function.

export default connectDB