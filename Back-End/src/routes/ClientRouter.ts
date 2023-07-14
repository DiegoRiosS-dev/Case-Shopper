import express from "express";
import { ClientController } from "../controllers/ClientController";

export const clientRouter = express.Router();
const clientController = new ClientController();

clientRouter.post("/create", (req, res) => clientController.createClient(req, res))
clientRouter.post("/login", (req, res) => clientController.login(req, res))
