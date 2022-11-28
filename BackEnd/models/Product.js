import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier_IT4492",
      required: true,
    },
    category_id: {
      type: [String],
      require: true
    },
    description: {
      type: String,
    },
    idImages: {
      type: [mongoose.Schema.Types.ObjectId],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model("Product_IT4492", ProductSchema);
