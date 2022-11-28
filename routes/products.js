const express = require('express')
const router = express.Router()

router.get('/', async (req, res)=>{
	res.json({})
})

router.get('/:id', async (req, res)=>{
	res.json({})
})

module.exports = router