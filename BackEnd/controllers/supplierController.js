import { EXITS, FAILED } from "../constants/index.js";
import { SupplierModel } from "../models/Supplier.js";

/*Thêm nhiều query để có nhiều kiểu tìm kiếm nữa  */
export const getSupplier = async (req, res) => {
  try {
    const listSupplier = await SupplierModel.find();
    res.status(200).json({ data: listSupplier, status_code: 200 });
  } catch (err) {
    res.status(500).json({ error: err, status_code: 500 });
    console.log("err:", err);
  }
};

export const getOneSupplier = async (req, res) => {
  try {
    const id = req.params?.supplier_id;
    const finded = await SupplierModel.findById(id);
    if (finded) {
      console.log(finded);
      res.status(200).json({ data: finded, status_code: 200 });
    } else {
        res.status(500).json({ error: FAILED, status_code: 500 });
    }
  } catch (err) {
    res.status(500).json({ error: err, status_code: 500 });
    console.log("err:", err);
  }
};

export const createSupplier = async (req, res) => {
  try {
    const newSuppplier = req.body;
    const finded = await SupplierModel.findOne({ name: newSuppplier.name });
    if (!finded) {
      const supplier = new SupplierModel(newSuppplier);
      await supplier.save();
      res.status(200).json({ data: supplier, status_code: 200 });
    } else {
      res.status(500).json({ error: EXITS, status_code: 500 });
    }
  } catch (err) {
    res.status(500).json({ error: err, status_code: 500 });
    console.log("err:", err);
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const udpateInfo = req.body;
    const id = req.params?.supplier_id;
    const updatedSupplier = await SupplierModel.findOneAndUpdate({_id: id},
        udpateInfo, {new: true});
    if (updatedSupplier) {
        res.status(200).json({ data: updatedSupplier, status_code: 200 });
    } else {
      res.status(500).json({ error: FAILED, status_code: 500 });
    }
  } catch (err) {
    res.status(500).json({ error: err, status_code: 500 });
    console.log("err:", err);
  }
};

export const deleteSupplier = async (req, res) => {
    const id = req.params?.supplier_id;
    const deleted = await SupplierModel.findOneAndDelete({_id: id});
    if (deleted) {
        res.status(200).json({ data: deleted, status_code: 200 });
    } else {
      res.status(500).json({ error: FAILED, status_code: 500 });
    }
  try {
  } catch (err) {
    res.status(500).json({ error: err, status_code: 500 });
    console.log("err:", err);
  }
};
