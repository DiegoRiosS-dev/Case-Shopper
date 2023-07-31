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
  };

  public updateProductStock = async (productId: number, newQty:number):Promise<void> => {
    try{
      if(!productId || !newQty){
        throw new CustomError(422,"Voce precisa fornecer o id do produto e a nova quantidade em estoque")
      }else if(newQty <= 0 ){
        throw new CustomError(401,"Você não pode e nem deve zerar o estoque de um produto")
      };
      if(isNaN(productId) || isNaN(newQty)){
        throw new CustomError(409,"Forneça o id do produto e a nova quantidade em numeros")
      }
      const productIdVerify = await this.productDb.productById(productId);
      if(!productIdVerify){
        throw new CustomError(409,"Verifique se o id do produto esta correto!")
      };

      await this.productDb.updateProductStock(productId,newQty)

    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  };
};