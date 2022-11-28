import mongoose from "mongoose";

const ProductCategorySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: true,
  },
});

export const ProductCategoryModel = mongoose.model(
  "productCategory",
  ProductCategorySchema
);
