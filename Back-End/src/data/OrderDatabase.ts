import { CustomError } from "../error/CustomError";
import { GetOrdersClientOutPut, OrderDTO } from "../type/DataModels";
import { BaseDatabase } from "./BaseDatabase";


export class OrderDatabase extends BaseDatabase {

  public createOrder = async (order:OrderDTO):Promise<void> => {
    try{
      await OrderDatabase.connection("Case_Shopper_Orders").insert(order)  

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  };

  public getOrdersByClientId = async (clientId: string):Promise<GetOrdersClientOutPut[]>  => {
    try{
      const orders = await OrderDatabase.connection.select( 
        "Case_Shopper_Orders.id",
        "Case_Shopper_Products.name",
        "Case_Shopper_Orders.qty",
        "order_date",
        "delivery_date"
      ).from("Case_Shopper_Orders")
      .innerJoin("Case_Shopper_Products", 
        "fk_product", "Case_Shopper_Products.id"
      ).where("fk_client",clientId)
      .orderBy("Case_Shopper_Orders.delivery_date")
      return orders;
      
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  };
}
