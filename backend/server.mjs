// require("dotenv").config();
import dotenv from "dotenv";
import express from "express";
import cors from 'cors'
import connectDB from "./config/db.mjs";
import ProductModel from './models/Product.mjs'
dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.post("/addproduct", async (req, res)=>{
    const id = req.body.id;
    const imgsrc = req.body.imgsrc;
    const title = req.body.title;
    const detail = req.body.detail;
    const prise = req.body.prise;
    const slug = req.body.slug
    const product = new ProductModel({
        id: id,
        imgsrc:imgsrc,
        title: title,
        detail:detail,
        prise: prise,
        slug: slug

    });
    try{
        await product.save();
        res.send("inserted data")
    } catch(error){
        console.log(error);
    }
})
app.get("/readproduct", async (req, res)=>{
    ProductModel.find({}, (err, result)=>{
        if(err){
            res.send(err)
        }
        res.send(result);
        
    })
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Our server running on ${PORT}`));
