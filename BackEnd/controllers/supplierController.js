import { SupplierModel } from "../models/Supplier.js";

export const getSupplier = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ error: err, status_code: 500 });
    console.log("err:", err);
  }
};

export const getOneSupplier = async (req, res) => {
  try {
    const id = req.params?.supplier_id;
  } catch (err) {
    res.status(500).json({ error: err, status_code: 500 });
    console.log("err:", err);
  }
};

export const createSupplier = async (req, res) => {
  try {
    const newSuppplier = req.body;
    console.log("IN", newSuppplier);
  } catch (err) {
    res.status(500).json({ error: err, status_code: 500 });
    console.log("err:", err);
  }
};

export const updateSupplier = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ error: err, status_code: 500 });
    console.log("err:", err);
  }
};

export const deleteSupplier = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ error: err, status_code: 500 });
    console.log("err:", err);
  }
};
