import { Request, Response } from "express";
import { OrderBusiness } from "../business/OrderBusiness";
import { OrderInput } from "../type/DataModels";


export class OrderController {
  private orderBusiness = new OrderBusiness();

  public createOrder = async (req:Request, res:Response):Promise<void> => {
    try{
      const newOrder:OrderInput = {
        clientId: req.body.clientId,
        delivery_date: req.body.delivery_date,
        products:req.body.products
      }
      await this.orderBusiness.createOrder(newOrder)
      res.status(201).send({
        message:"Pedido finalizado com sucesso" 
      })
    }catch(error:any){
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }
}