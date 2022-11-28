import mongoose, {Schema} from "mongoose";

const StockSchema = new Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product_IT4492",
        required: true
    },
    quantity: {
        type: Number,
        default: 0,
    },
    size: String,
    color: String,
}, {timestamps: true});

export const StockModel = mongoose.model("Stock_IT4492", StockSchema);