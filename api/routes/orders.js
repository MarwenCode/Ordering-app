import express from "express";
import Order from "../models/Order.js";

const orderRoute = express.Router();

//create an order
orderRoute.post("/", async(req, res) => {
    try {
        const newOrder = new Order(req.body);
        const order = await newOrder.save();
        res.status(200).json(order)
        
    } catch (error) {
        res.status(500).json(error);
        
    }
});

//get all orders
orderRoute.get("/", async(req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})

//get a single order
orderRoute.get("/:id", async(req,res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})


//update an order
orderRoute.put("/:id", async(req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            { new: true}
            
            );
        // const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
        //     new: true,
        //   });
            res.status(200).json(updatedOrder)
        
    } catch (error) {
        res.status(500).json(error)
    }
})




export default orderRoute