import mongoose, {Schema} from "mongoose";

const ImageSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    imageBuffer: {
        type: String,
        required: true,
    },
    imageType: {
        type: String,
        required: true
    },
    color: {
        type: String,
    }
}, {timestamps: true});

export const ImageModel = mongoose.model('Image_IT4492', ImageSchema);