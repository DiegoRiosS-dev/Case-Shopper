import express from "express";
import { OrderController } from "../controllers/OrderController";

export const orderRouter = express.Router();
const orderController = new OrderController()

orderRouter.post("/create", (req, res) => orderController.createOrder(req, res))
orderRouter.get("/list/:clientId", (req, res) => orderController.getOrdersByClientId(req, res))