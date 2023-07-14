
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
