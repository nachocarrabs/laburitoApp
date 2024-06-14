import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose"

dotenv.config();

const url = process.env.MONGO

const app = express()
mongoose.set('strictQuery', true)

const connect = async () => {
    try {
        await mongoose.connect(url)
        console.log(">>>>>> Database connected");
    } catch (error) {
        console.log(error);
    }
}

app.listen(3000, () => {
    connect()
    console.log("Backend server listen on port 3000");
})
