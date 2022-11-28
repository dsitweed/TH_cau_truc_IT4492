if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

const express = require('express')
const app = express()

/**
 * Body parser
 */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(bodyParser.json())

/**
 * public folder serves static files
 */
app.use(express.static('public'));

/**
 * Connect to mongoose database
 */
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log(`Connected to mongodb`)
	})
	.catch((err) => {
		console.error('Failed to connect to mongodb: ', err)
		process.exit(1)
	})
const db = mongoose.connection

/**
 * Setup swagger
 */
// const swaggerJSdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDoc = YAML.load('./api.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

/**
 * Express routes
 */
const productsRoute = require('./routes/products.js')
const imagesRoute = require('./routes/images.js')
app.use('/products', productsRoute)
app.use('/images', imagesRoute)

/**
 * Server instance
 */
const PORT = parseInt(process.env.PORT)
const HOSTNAME = process.env.HOSTNAME
const server = app.listen(PORT, HOSTNAME,
	() => { console.log(`Listening on ${HOSTNAME}:${PORT}`) });

/**
 * Handle signals
 */
const proc = require('process');
function shutdown(err) {
	console.error(`About to exit with code ${err}`)
	db.close()
	server.close()
	process.exit(0)
}
proc.on('SIGINT', shutdown);
proc.on('SIGTERM', shutdown);
proc.on('SIGABRT', shutdown);
