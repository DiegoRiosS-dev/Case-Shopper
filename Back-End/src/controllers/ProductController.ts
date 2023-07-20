import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";


export class ProductController {
  private productBuss = new ProductBusiness()

  public getAllProduct = async (req:Request, res:Response):Promise<void> => {
    try{
      const products = await this.productBuss.getAllProduct();
      
      res.status(200).send(products)
    }catch(error:any){
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  };

  public updateProductStock = async (req:Request, res:Response):Promise<void> => {
    try{
      const productId = req.body.productId as number;
      const newQty = req.body.newQty as number;

      await this.productBuss.updateProductStock(productId,newQty)
      
      res.status(201).send({
        message:"Estoque do produto atualizado" 
      })
    }catch(error:any){
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }

}