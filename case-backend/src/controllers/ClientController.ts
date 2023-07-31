import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness";
import { ClientLogin, InputClient } from "../type/DataModels";

export class ClientController {
  private clientBusiness = new ClientBusiness()

  public createClient = async (req:Request, res:Response):Promise<void> => {
    try{
      const newClient:InputClient = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
      const token = await this.clientBusiness.createClient(newClient)
      res.status(201).send({
        message:"Cliente criado com sucesso",
        token: token
      })

    }catch(error:any){
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  };
  // ------ /// ------------ /// --------- ///- ----- //
  public login = async (req:Request, res:Response):Promise<void> => {
    try{
      const login:ClientLogin = {
        email: req.body.email,
        password: req.body.password
      }
      const token = await this.clientBusiness.login(login)
      res.status(200).send({
        message:"logged",
        token: token
      })
      
    }catch(error:any){
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }

}