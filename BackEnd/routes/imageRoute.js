import express from "express";
const router = express.Router();
import { ImageModel } from "../models/Image.js";

// setup multer
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 10, // image max size = 10Mb
  },
  fileFilter: (req, file, cb) => {
    if (file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|webp|WEBP)$/)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

router.post("/", upload.array("img"), async (req, res) => {
  const images = [];
  req.files.forEach((file) => {
    images.push(
      new ImageModel({
        productId: req.body.productId,
        imageBuffer: file.buffer,
        imageType: file.mimetype,
        color: req.body.color,
      })
    );
  });
  try {
    const imageIDs = [];
    for (const image of images) {
      const newImg = await image.save();
      imageIDs.push(newImg._id);
    }
    res.status(200).json({
      images: imageIDs,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get all details about an image
router.get("/:id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params.id).select('-imageBuffer').exec();
    res.status(200).json(image);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get image file only
router.get("/image/:id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params.id).select('imageType imageBuffer').exec();
    res.status(200).contentType(image.imageType).send(image.imageBuffer);

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

export default router;
