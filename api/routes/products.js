import express from "express";
import Product from "../models/Product.js";

const productRoute = express.Router();

//create a product
productRoute.post("/", async(req, res) => {
    try {
        const newProduct = new Product(req.body);
        const product = await newProduct.save();
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json(error);
        
    }
});

//get all products
productRoute.get("/", async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})

//get a single product
productRoute.get("/:id", async(req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})





export default productRoute