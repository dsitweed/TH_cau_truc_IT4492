import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    imageBuffer: {
      type: String,
      required: true,
    },
    imageType: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
  },
  { timestamps: true }
);

export const ImageModel = mongoose.model("images", ImageSchema);
