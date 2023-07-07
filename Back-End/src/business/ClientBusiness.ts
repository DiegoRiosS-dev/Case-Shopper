import { CustomError } from "../error/CustomError";
import { IdGenerator } from "../services/idGenerator";
import { TClient } from "../type/DataModels";
import * as ClientErr from "../error/ClientCustomErr"
import { ClientDatabase } from "../data/ClientDatabase";



export class ClientBusiness {
  private generateId = new IdGenerator().generateId;
  private cliendDb = new ClientDatabase()

  public createClient = async (name:string):Promise<void> => {
    try{
      if(!name){
        throw new ClientErr.InvalidInputClient()
      };
      const userClientExist = await this.cliendDb.getClientByName(name);

      if(userClientExist){
        throw new ClientErr.UserAlreadyCadasted(name)

      };

      await this.cliendDb.createClient({
        id: this.generateId(),
        name: name
      })
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  };
  // ------ /// ------------ /// --------- ///- ----- //

}