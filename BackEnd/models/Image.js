import mongoose, { Schema } from "mongoose";

const ImageSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
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

ImageSchema.virtual("img").get(function () {
  if (this.imageBuffer != null && this.imageType != null) {
    return `data:${this.imageType};base64,${this.imageBuffer.toString(
      "base64"
    )}`;
  }
});

export const ImageModel = mongoose.model("Image_IT4492", ImageSchema);