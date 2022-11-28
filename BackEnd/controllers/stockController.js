import { FAILED, NO_EXITS } from "../constants/index.js";
import {StockModel} from "../models/Stock.js";

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
        const finded = await StockModel.findById(id);
        if (finded) {
            res.status(200).json({data: finded, status_code: 200});
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
        const finded = await StockModel.find({product_id: stock.product_id, size: stock.size, color: stock.color});
        if (finded) {   
            finded.quantity += stock.quantity;
            updatedStock = await StockModel.findByIdAndUpdate({_id: finded._id, finded});
        } else {
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
        let updatedStock;
        const stock = req?.body;
        const id = req.params?.stock_id;
        const finded = await StockModel.findById(id);
        if (finded) {
            if (finded.quantity >= stock.quantity) {
                finded.quantity -= stock.quantity;
                updatedStock = await StockModel.findByIdAndUpdate({_id: id, finded});
            } else {
                res.status(500).json({error: FAILED, status_code: 500});
            }
        } else {
            res.status(500).json({error: NO_EXITS, status_code: 500});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({error: err, status_code: 500});
    }
}