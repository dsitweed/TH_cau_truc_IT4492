import express from "express";
const router = express.Router();

// setup multer
const multer = require('multer');

const upload = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 1024*1024*10
	},
	fileFilter: (req, file, cb)=>{
		if(file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|webp|WEBP)$/)){
			cb(null, true)
		}else{
			cb(null, false)
		}
	}
})

router.post('/', upload.array('img'), async(req, res)=>{
	const images = []
	req.files.forEach(file => {
		images.push(new Image({
			productId: req.body.productId,
			imageBuffer: file.buffer,
			imageType: file.mimetype,
			color: req.body.color
		}))
	})
	try{
		const imageIDs = []
		for(const image of images){
			const newImg = await image.save()
			imageIDs.push(newImg._id)
		}
		// res.status(200).send(`<img src="data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}">`)
		res.status(200).json({
			images: imageIDs
		})
	}catch(err){
		console.error(err)
		res.status(500).json(err)
	}
})

router.get('/:id', async(req, res)=>{
	try{
		const image = await Image.findById(req.params.id).exec()
		// res.status(200).json(img)
		res.status(200).json({
			_id: image._id,
			productId: image.productId,
			color: image.color,
			img: image.img
		})
	}catch(err){
		console.error(err)
		res.status(500).json(err)
	}
})

export default router;