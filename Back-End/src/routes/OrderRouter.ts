import express from "express";
import { OrderController } from "../controllers/OrderController";

export const orderRouter = express.Router();
const orderController = new OrderController()

orderRouter.post("/create", (req, res) => orderController.createOrder(req, res))