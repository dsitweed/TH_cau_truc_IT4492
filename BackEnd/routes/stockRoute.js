import express, {Router} from "express";
import { addStock, removeStock } from "../controllers/stockController.js";

const router = Router();

router.post('/', addStock);

router.put('/:stock_id', removeStock);

export default router;