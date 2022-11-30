import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "suppliers",
      required: true,
    },
    description: {
      type: String,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "categories",
    },
    idImages: {
      type: [mongoose.Schema.Types.ObjectId],
	  ref: "images"
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model("products", ProductSchema);
