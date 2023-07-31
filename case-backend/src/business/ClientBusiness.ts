import { CustomError } from "../error/CustomError";
import { IdGenerator } from "../services/IdGenerator";
import { ClientLogin, InputClient } from "../type/DataModels";
import * as ClientErr from "../error/ClientCustomErr"
import { ClientDatabase } from "../data/ClientDatabase";



export class ClientBusiness {
  private generateId = new IdGenerator().generateId;
  private cliendDb = new ClientDatabase()

  public createClient = async (input: InputClient):Promise<string> => {
    try{
      const verifyPass = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

      if(!input.name || !input.email || !input.password){
        throw new ClientErr.InvalidInputClient()
      };
      if(!input.email.includes("@")){
        throw new ClientErr.InputEmailIncorrect()
      }else if(!verifyPass.test(input.password)){
        throw new ClientErr.InvalidImputPassword()
      }
      const clientEmailExists = await this.cliendDb.getClientByEmail(input.email);

      if(clientEmailExists){
        throw new ClientErr.EmailAlreadyCadasted()
      };

      const id = this.generateId();
      await this.cliendDb.createClient({
        id: id,
        name: input.name,
        email: input.email,
        password: input.password
      })
      
      return id
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  };
  // ------ /// ------------ /// --------- ///- ----- //
  public login = async (log: ClientLogin):Promise<string> => {
    try{
      if(!log.email || !log.password){
        throw new ClientErr.InvalidImputLogin()
      }
      const user = await this.cliendDb.getClientByEmail(log.email);
      if(!user){
        throw new ClientErr.loginEmailOrPassIncorrect()
      }
      if(user && user.password !== log.password){
        throw new ClientErr.loginEmailOrPassIncorrect()
      }

      return user.id
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  }
}