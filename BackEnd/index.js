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

const app = express();
const port = process.env.PORT || 5000;
const URI = process.env.MDB_URI;

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

mongoose
  .connect(URI)

  .then(() => {
    app.listen(port, () => {
      console.log("Connected to MongooseDB");
      console.log(`Server is running on: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("err:", err);
  });

app.use("/api/suppliers", supplierRouter);
app.use("/stock", stockRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/products", productsRouter);
