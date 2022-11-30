import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import "./models/index.js";
import categoriesRouter from "./routes/categories.js";
import productsRouter from "./routes/productsRoutes.js";
import stockRouter from "./routes/stockRoute.js";
import supplierRouter from "./routes/supplierRoute.js";
import imageRouter from "./routes/imageRoute.js";

const app = express();
const port = process.env.PORT || 5000;
const URI = process.env.MDB_URI;

/**
 * Setup swagger
 */
// const swaggerJSdoc = require('swagger-jsdoc')
import swaggerUi from 'swagger-ui-express';
import YAML from "yamljs";
const swaggerDoc = YAML.load('./api.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/* ****** Middleware ****** */
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(
	cors({
		origin: true,
		credentials: true,
	})
);

var server;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		server = app.listen(port, () => {
			console.log("Connected to MongoDB");
			console.log(`Server is running on: http://localhost:${port}`);
		});
	})
	.catch((err) => {
		console.error('Failed to connect to mongodb: ', err);
		process.exit(1);
	})
const db = mongoose.connection

app.use("/api/suppliers", supplierRouter);
app.use("/api/stock", stockRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/products", productsRouter);
app.use("/api/image", imageRouter);

/**
 * Handle signals
 */
import proc from 'process';
function shutdown(err) {
	console.error(`About to exit with code ${err}`);
	db.close();
	server.close();
	process.exit(0);
}
proc.on('exit', shutdown);
proc.on('SIGINT', shutdown);
proc.on('SIGTERM', shutdown);
proc.on('SIGABRT', shutdown);
