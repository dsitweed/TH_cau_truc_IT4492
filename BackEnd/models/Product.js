import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    img: {
        type: String,
        required: false
    },
    stock: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["active", "inactive"]
    },
    price: {
        type: mongoose.Decimal128
    }
}, { timestamps: true});

export const ProductModel = mongoose.model("Product_IT4492", ProductSchema);
