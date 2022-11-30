import dotenv from "dotenv";
if(process.env.NODE_ENV !== 'product'){
	dotenv.config();
}

/* ****** Main application ****** */
import express from "express";
const app = express();

/* ****** Setup swagger api doc ****** */
import swaggerUi from 'swagger-ui-express';
import YAML from "yamljs";
const swaggerDoc = YAML.load('./api.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

/* ****** Setup cookie parser ****** */
import cookieParser from "cookie-parser";
app.use(cookieParser());

/* ****** Setup CORS ****** */
import cors from "cors";
app.use(cors({origin: true,credentials: true,}));

/* ****** Other middlewares ****** */
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

/* ****** Mongodb connection ****** */
import mongoose from "mongoose";
mongoose.connect(process.env.MDB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log(`Connected to mongodb`);
	})
	.catch((err) => {
		console.error('Failed to connect to mongodb: ', err);
		process.exit(1);
	});
const db = mongoose.connection;

/* ****** All routes ****** */
import categoriesRouter from "./routes/categories.js";
import productsRouter from "./routes/productsRoutes.js";
import stockRouter from "./routes/stockRoute.js";
import supplierRouter from "./routes/supplierRoute.js";
import imageRouter from "./routes/imageRoute.js";
app.use("/api/categories", categoriesRouter);
app.use("/api/products", productsRouter);
app.use("/api/stocks", stockRouter);
app.use("/api/suppliers", supplierRouter);
app.use("/api/images", imageRouter);

/* ****** Start server ****** */
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const server = app.listen(PORT, HOST, ()=>{console.log(`Listening on ${HOST}:${PORT}`);});

/**
 * Handle signals
 */
import proc from 'process';
async function shutdown(err) {
	console.error(`About to exit with code ${err}`);
	server.close();
	try{
		await db.close();
	}catch(err){
		console.error(err);
	}
	process.exit(0);
}
proc.on('exit', shutdown);
proc.on('SIGINT', shutdown);
proc.on('SIGTERM', shutdown);
proc.on('SIGABRT', shutdown);
