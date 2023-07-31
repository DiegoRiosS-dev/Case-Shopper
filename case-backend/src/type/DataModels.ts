
export interface TProduct {
  id: number,
  name: string,
  price: number,
  qty_stock: number
};
// -- -- -- -- // -- -- -- -- // -- -- -- -- //
export interface TClient {
  id: string,
  email:string,
  name: string,
  password: string 
};
export interface InputClient {
  email: string,
  name: string,
  password: string
};
export interface ClientLogin {
  email: string,
  password: string
};
// -- -- -- -- // -- -- -- -- // -- -- -- -- //

export interface ProductsOrder{ 
  productId:number, 
  qty:number
}
export interface OrderInput {
  delivery_date: string,
  clientId: string,
  products:ProductsOrder[]
};

export interface OrderDTO {
  id: string,
  order_date: string,
  delivery_date: string,
  qty: number,
  fk_client: string,
  fk_product: number,
}

export interface GetOrdersClientOutPut {
  id: string,
  name: string,
  qty: string,
  order_date: string,
  delivery_date: string
}
// -- -- -- -- // -- -- -- -- // -- -- -- -- //
export interface DateVerifyOutput {
  validDate: boolean,
  codeErr: number,
  errorMsg: string,
  DMA:Array<number>
}