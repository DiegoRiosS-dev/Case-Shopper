import { ProductDataBase } from "../data/ProductDataBase";
import { CustomError } from "../error/CustomError";
import { TProduct } from "../type/DataModels";


export class ProductBusiness {
  private productDb = new ProductDataBase();

  public getAllProduct = async ():Promise<TProduct[]> => {
    try{
      return await this.productDb.getAllProduct();

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  }
};