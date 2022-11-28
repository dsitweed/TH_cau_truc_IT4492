import mongoose, {Schema} from "mongoose";

const ProductCategorySchema = new Schema({
    product_id: {
    type: Schema.Types.ObjectId,
    required: true
    },
    cart_id: {
    type: Schema.Types.ObjectId,
    required: true
    }
});

export const ProductCategoryModel = mongoose.model('ProductCategory_MERN_App', ProductCategorySchema);