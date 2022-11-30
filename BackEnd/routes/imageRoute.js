import express from "express";
import { getImageById, getImageDetailsById, uploadImages } from "../controllers/imageController.js";
const router = express.Router();

// setup multer
import multer from "multer";
const upload = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 1024 * 1024 * 10,	// maximum file size = 10mb
	},
	fileFilter: (req, file, cb) => {
		if (file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|webp|WEBP)$/)) {
			cb(null, true);
		} else {
			cb(null, false);
		}
	},
});

// uploading multiple images route
router.post("/", upload.array("img"), uploadImages);

// get all details about an image
router.get("/:id", getImageDetailsById);

// get image file only
router.get("/image/:id", getImageById);

export default router;
