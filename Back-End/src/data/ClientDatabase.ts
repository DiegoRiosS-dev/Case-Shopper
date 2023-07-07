import { CustomError } from "../error/CustomError";
import { TClient } from "../type/DataModels";
import { BaseDatabase } from "./BaseDatabase";

export class ClientDatabase extends BaseDatabase {
  

  public createClient = async (client:TClient):Promise<void> => {
    try{
      await ClientDatabase.connection("Case_Shopper_Clients").insert(client)   

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
   
  };
  // ------ /// ------------ /// --------- ///- ----- //
  public getClientByName = async (name:string):Promise<TClient> => {
    try{
      const client = await ClientDatabase.connection("Case_Shopper_Clients").where("name",name)
      return client[0]  

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }

  };
  // ------ /// ------------ /// --------- ///- ----- //

  public getClientById = async (id:string):Promise<TClient> => {
    try{
      const client = await ClientDatabase.connection("Case_Shopper_Clients").where("id",id)
      return client[0]  

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  }
}; 