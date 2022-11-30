import mongoose from "mongoose";
import { ImageModel } from "../models/Image.js";
import { ERR_400, ERR_404, ERR_500 } from "../constants/error.js";

export const uploadImages = async (req, res) => {
	// files uploaded using enctype="multipart/form-data"
	const images = [];
	if (req.files) {
		req.files.forEach((file) => {
			images.push(new ImageModel({
				productId: req.body.productId,
				imageBuffer: file.buffer,
				imageType: file.mimetype,
				imageUrl: undefined,
				color: req.body.color,
			})
			);
		});
	} else if (req.body.images) {
		// links to images
		req.body.images.forEach(image => {
			images.push(new ImageModel({
				productId: req.body.productId,
				imageBuffer: undefined,
				imageType: undefined,
				imageUrl: image,
				color: req.body.color,
			})
			);
		});
	} else {
		// bad request
		return res.status(400).json({ error: 'Image files or image urls are required'});
	}

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
		res.status(500).json({error: ERR_500});
	}
}

export const getImageDetailsById = async (req, res) => {
	try {
		const image = await ImageModel.findById(req.params.id).select('-imageBuffer').exec();
		if (!image) {
			return res.status(404).json({ error: ERR_404 })
		}
		res.status(200).json(image);
	} catch (err) {
		console.error(err);
		if (err instanceof mongoose.CastError) {
			return res.status(400).json({ error: err.message });
		}
		res.status(500).json({ error: ERR_500 });
	}
}

export const getImageById = async (req, res) => {
	try {
		const image = await ImageModel.findById(req.params.id).select('imageType imageBuffer').exec();
		if (!image) {
			return res.status(404).json({ error: ERR_404 });
		}
		res.status(200).contentType(image.imageType).send(image.imageBuffer);
	} catch (err) {
		console.error(err);
		if (err instanceof mongoose.CastError) {
			return res.status(400).json({ error: err.message });
		}
		res.status(500).json({ error: ERR_500 });
	}
}