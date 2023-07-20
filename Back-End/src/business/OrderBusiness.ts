import { CustomError } from "../error/CustomError";
import { IdGenerator } from "../services/IdGenerator";
import { GetOrdersClientOutPut, OrderInput } from "../type/DataModels";
import * as OrderErr from "../error/OrderCustomErr"
import { ProductDataBase } from "../data/ProductDataBase";
import { ClientDatabase } from "../data/ClientDatabase";
import { OrderDatabase } from "../data/OrderDatabase";
import { DateVerify } from "../services/DateVerify";


export class OrderBusiness {
  private generateId = new IdGenerator().generateId;
  private productDb = new ProductDataBase();
  private clientDb = new ClientDatabase();
  private orderDb = new OrderDatabase();
  private dateVerify = new DateVerify().dateVerify;

  public createOrder = async (input:OrderInput):Promise<void> => {
    try{
      if(!input.clientId || !input.delivery_date || !input.products || input.products.length <= 0 ){
        throw new OrderErr.InvalidInputOrder()
      };

      const isArray = input.products[0];
      if(typeof(isArray) !== "object"){
        throw new OrderErr.InvalidInputOrder()
      };

      const {DMA,codeErr,errorMsg,validDate} = this.dateVerify(input.delivery_date)
      if(!validDate){
        throw new CustomError(codeErr,errorMsg)
      };

      const verifyClient = await this.clientDb.getClientById(input.clientId);
      if(!verifyClient){
        throw new OrderErr.InvalidClientId()
      };

      for(let i=0; i < input.products.length; i++){
        const productId = input.products[i].productId;      
        if(!productId || !input.products[i].qty){
          throw new CustomError(422,"insira de forma válida em products ex = products: [ {productId:id, qty}, {object}, ... ]")
        }else if (isNaN(input.products[i].qty)){
          throw new CustomError(409,"A quantidade dos produtos devem ser em numeros")
        };

        const getStock = await this.productDb.productById(productId);
        if(!getStock || getStock === undefined){
          throw new OrderErr.InvalidProductId()
        };

        if(getStock.qty_stock === 0){
          throw new OrderErr.ProductStockEmpty()
        } else if(getStock.qty_stock < input.products[i].qty){
          throw new OrderErr.InvalidStockProduct(getStock.qty_stock)
        }
      };

      await input.products.forEach( async (product) => {
        const {qty_stock} = await this.productDb.productById(product.productId);
       
        await this.orderDb.createOrder({
          id: this.generateId(),
          order_date: `${DMA[0]}/0${DMA[1]}/${DMA[2]}`,
          delivery_date: input.delivery_date,
          qty:product.qty,
          fk_client:input.clientId,
          fk_product: product.productId 
        })

        await this.productDb.updateProductStock(product.productId, qty_stock - product.qty)
      });
      
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  };

  public getOrdersByClientId = async (clientId: string):Promise<GetOrdersClientOutPut[]>  => {
    try{
      if(!clientId || clientId === ":clientId"){
        throw new CustomError(422,"Você precisa fornecer o id do cliente")
      };

      const verifyClientId = await this.clientDb.getClientById(clientId);

      if(!verifyClientId){
        throw new OrderErr.InvalidClientId()
      };

      const orders = await this.orderDb.getOrdersByClientId(clientId);

      return orders;
    }catch(error:any){
      throw new CustomError(error.statusCode, error.message)
    }
  };

}