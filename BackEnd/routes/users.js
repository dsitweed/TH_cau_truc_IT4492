import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.get('/', getAllUser);

router.get('/:id', getUser);


export default router;
