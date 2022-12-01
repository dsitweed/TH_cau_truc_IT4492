import { FAILED, NO_EXITS } from "../constants/index.js";
import { StockModel } from "../models/Stock.js";

export const getAllStock = async (req, res) => {
  try {
    const list = await StockModel.find();
    res.status(200).json({ data: list, status_code: 200 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err, status_code: 500 });
  }
};

export const getOneStock = async (req, res) => {
  try {
    const id = req.params?.stock_id;
    const fonded = await StockModel.findById(id);
    if (fonded) {
      res.status(200).json({ data: fonded, status_code: 200 });
    } else {
      res.status(500).json({ error: NO_EXITS, status_code: 500 });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err, status_code: 500 });
  }
};

export const addStock = async (req, res) => {
  try {
    let updatedStock;
    const stock = req?.body;
    const found = await StockModel.findOne({
      product_id: stock.product_id,
      size: stock.size,
      color: stock.color,
    });
    if (found) {
      found.quantity += stock.quantity;
      updatedStock = await StockModel.findByIdAndUpdate({
        _id: found._id,
        found,
      });
    } else {
      updatedStock = new StockModel(stock);
      await updatedStock.save();
    }
    res.status(200).json({ data: updatedStock, status_code: 200 });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err, status_code: 500 });
  }
};

export const removeStock = async (req, res) => {
  try {
    let updatedStock;
    const stock = req?.body;
    const id = req.params?.stock_id;
    const found = await StockModel.findById(id);
    if (found) {
      if (found.quantity >= stock.quantity) {
        found.quantity -= stock.quantity;
        updatedStock = await StockModel.findByIdAndUpdate({ _id: id, found });
      } else {
        res.status(500).json({ error: FAILED, status_code: 500 });
      }
    } else {
      res.status(500).json({ error: NO_EXITS, status_code: 500 });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err, status_code: 500 });
  }
};
