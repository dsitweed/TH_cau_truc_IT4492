import express from "express";

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;