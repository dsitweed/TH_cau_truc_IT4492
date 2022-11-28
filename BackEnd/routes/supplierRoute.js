import express, {Router} from "express";
import { createSupplier, deleteSupplier, getOneSupplier, getSupplier, updateSupplier } from "../controllers/supplierController.js";

const router = Router();

router.get('/', getSupplier);
router.get('/:supplier_id', getOneSupplier);

router.post('/', createSupplier);

router.put('/:supplier_id', updateSupplier);

router.delete('/:supplier_id', deleteSupplier);


export default router;