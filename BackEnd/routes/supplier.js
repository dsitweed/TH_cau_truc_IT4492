import express, {Router} from "express";
import { getOneSupplier, getSupplier } from "../controllers/supplierController";

const router = Router();

router.get('/', getSupplier);
router.get('/:supplier_id', getOneSupplier);

router.post('/', )

export default router;