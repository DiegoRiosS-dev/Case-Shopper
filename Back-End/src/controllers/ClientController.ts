import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness";

export class ClientController {
  private clientBusiness = new ClientBusiness()

  public createClient = async (req:Request, res:Response):Promise<void> => {
    try{
      const name = req.body.name;
      
      await this.clientBusiness.createClient(name)
      res.status(200).send({message:"Cliente criado com sucesso"})
      
    }catch(error:any){
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }
}