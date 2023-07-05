import express from "express";
import { ProductController } from "../controllers/ProductController";


export const productRouter = express.Router();

const productController = new ProductController();

productRouter.get("/all", (req, res) => productController.getAllProduct(req, res));