import mongoose from "mongoose";

const StockSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    size: {
		type: String
	},
    color: {
		type:String
	},
  },
  { timestamps: true }
);

export const StockModel = mongoose.model("stocks", StockSchema);
