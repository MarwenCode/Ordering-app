import express from "express";
import Order from "../models/Order.js";

const orderRoute = express.Router();

//create a product
orderRoute.post("/", async(req, res) => {
    try {
        const newOrder = new Order(req.body);
        const order = await newOrder.save();
        res.status(200).json(order)
        
    } catch (error) {
        res.status(500).json(error);
        
    }
});

//get all products
orderRoute.get("/", async(req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})

//get a single product
orderRoute.get("/", async(req,body) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})





export default orderRoute