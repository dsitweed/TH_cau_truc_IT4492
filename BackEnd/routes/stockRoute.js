import express, {Router} from "express";
import { addStock, getAllStock, getOneStock, removeStock } from "../controllers/stockController.js";

const router = Router();

// just for developer

router.get('/', getAllStock);

router.get('/:stock_id', getOneStock);

// 

router.post('/', addStock);

router.put('/:stock_id', removeStock);

export default router;