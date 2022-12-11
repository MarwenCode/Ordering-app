import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import multer from "multer";
import path from 'path';
import productRoute from "./routes/products.js";
import orderRoute from "./routes/orders.js";
import cors from "cors";
// import { fileURLToPath } from "url";

const app = express()
dotenv.config()

// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);
// console.log("images", __dirname);

const connect = async () => {
    try {
      
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongoDB")
        
    } catch (error) {
        throw error;
        
    }
}

app.use(cors())

app.use(express.json());
app.use("/api/products", productRoute)
app.use("/api/orders", orderRoute)


// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });



app.get("/", (req, res) => {
  res.send('hello to ordering-app API')
})

app.listen(8000, () => {
    connect();
    console.log("connected to backend")
})