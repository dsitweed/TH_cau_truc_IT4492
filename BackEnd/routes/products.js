import express from "express";
import productsController from "../controllers/products.js";
const router = express.Router();

router.get("/", productsController.index);

router.get("/:id", productsController.getById);

router.post("/", productsController.create);

router.put("/:id", productsController.update);

router.delete("/:id", productsController.deleteById);

export default router;
