import { CustomError } from "../error/CustomError";
import { OrderDTO } from "../type/DataModels";
import { BaseDatabase } from "./BaseDatabase";


export class OrderDatabase extends BaseDatabase {

  public createOrder = async (order:OrderDTO):Promise<void> => {
    try{
      await OrderDatabase.connection("Case_Shopper_Orders").insert(order)  

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  };

}
