import { CustomError } from "../error/CustomError";
import { TProduct } from "../type/DataModels";
import { BaseDatabase } from "./BaseDatabase";



export class ProductDataBase extends BaseDatabase {
  
  public getAllProduct = async ():Promise <TProduct[]> => {
    try{
      return await ProductDataBase.connection("Case_Shopper_Products").select()

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  };
  // -- -- -- -- -- -- // -- -- -- -- -- -- // -- -- -- -- -- -- //
  public productById = async (id:number):Promise<TProduct> => {
    try{
      const product = await ProductDataBase.connection("Case_Shopper_Products").where("id", id)
      return product[0]
      
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  };
  // -- -- -- -- -- -- // -- -- -- -- -- -- // -- -- -- -- -- -- //
  public updateProductStock = async (id:number, newQty:number):Promise<void> => {
    try{
      await ProductDataBase.connection("Case_Shopper_Products").where(id).update({qty_stock:newQty })

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  };

}