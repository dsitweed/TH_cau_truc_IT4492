import mongoose, { ObjectId} from "mongoose";
import { FAILED, NO_EXITS } from "../constants/index.js";
import {StockModel, ProductModel} from "../models/index.js";

export const getAllStock = async (req, res) => {
    try {
        const list = await StockModel.find();
        res.status(200).json({data: list, status_code: 200});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err, status_code: 500});
    }
}

export const getOneStock = async (req, res) => {
    try {
        const id = req.params?.stock_id;
        const found = await StockModel.findById(id);
        if (found) {
            res.status(200).json({data: found, status_code: 200});
        } else {
            res.status(500).json({error: NO_EXITS, status_code: 500});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err, status_code: 500});
    }
}

export const addStock = async (req, res) => {
    try {
        let updatedStock;
        const stock = req?.body;
        const found = await StockModel.find({product_id: stock.product_id, size: stock.size, color: stock.color});
        if (found && found.length == 1) {  
            let foundStock = found[0]; 
            foundStock.quantity += stock.quantity;
            updatedStock = await StockModel.findByIdAndUpdate(foundStock._id, foundStock, {new: true});
        } else {
            let product = await ProductModel.findById(stock.product_id);
            if (!product) { // not found product
                return res.status(500).json({error: FAILED, status_code: 500});
            }
            // save in stock table
            updatedStock = new StockModel(stock);
            await updatedStock.save();
        }
        res.status(200).json({data: updatedStock, status_code: 200});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err, status_code: 500});
    }
}

export const removeStock = async (req, res) => {
    try {
        const stock = req?.body;
        const id = req.params?.stock_id;
        const found = await StockModel.findById(id);
        if (!found) return res.status(500).json({error: NO_EXITS, status_code: 500});
        console.log(found);

        if (found.quantity < stock.quantity) return res.status(500).json({error: FAILED, status_code: 500});
        found.quantity -= stock.quantity;
        const updatedStock = await StockModel.findByIdAndUpdate(id, found, {new: true});
        res.status(200).json({data: updatedStock, status_code: 200});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err, status_code: 500});
    }
}