// require("dotenv").config();
import dotenv from "dotenv";
import connectDB from "./config/db.mjs";
import ProductModel from './models/Product.mjs'
dotenv.config();

connectDB();

import express from "express";
const app = express();
app.get("/", async (req, res)=>{
    const product = new ProductModel({
        id: 1,
        imgsrc:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/11/6b4c7e8d-d78d-4232-80b5-f49b2c7ebdb61641884921424-RTF-Winterwear_M_H_Here_NoW.jpg",
        title: "this is pant",
        detail:"This is very nice pant",
        prise: 300,
        slug: "a"

    });
    try{
        await product.save();
        res.send("inserted data")
    } catch(error){
        console.log(error);
    }
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Our server running on ${PORT}`));
