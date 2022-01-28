import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    // idd:{
    //     type: Number,
    //     require: true
    // },
    imgsrc:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    prise:{
        type: Number,
        require: true
    },
    slug:{
        type: String,
        require: true
    }
});

const Product = mongoose.model("Product", ProductSchema)

export default Product;