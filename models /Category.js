import mongoose, {Schema} from "mongoose";

const CategorySchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
   }
}, { timestamps:true });

export const CategoryModel = mongoose.model('Category_IT4492', CategorySchema);