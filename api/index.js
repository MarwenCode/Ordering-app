import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import multer from "multer";
import path from 'path';
import productRoute from "./routes/products.js";
import orderRoute from "./routes/orders.js";

const app = express()
dotenv.config()

const connect = async () => {
    try {
      
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongoDB")
        
    } catch (error) {
        throw error;
        
    }
}

app.use(express.json());
app.use("/api/products", productRoute)
app.use("/api/orders", orderRoute)

app.listen(8000, () => {
    connect();
    console.log("connected to backend")
})