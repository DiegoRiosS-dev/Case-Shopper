import { CustomError } from "./CustomError";

export class InvalidInputOrder extends CustomError{ 
  constructor(){
    super(422, "Verifique se o body foi preenchido corretamente")
  }
};
// --- -- -- -- -- -- -- // -- -- -- ---  //
export class InvalidProductId extends CustomError{ 
  constructor(){
    super(404, "Id do produto invalido")
  }
};
// --- -- -- -- -- -- -- // -- -- -- ---  //
export class ProductStockEmpty extends CustomError{ 
  constructor(){
    super(409, "O estoque deste produto esta zerado")
  }
};

export class InvalidStockProduct extends CustomError{ 
  constructor(stock:number){
    super(409,`O produto so tem ${stock} em estoque`)
  }
};
// --- -- -- -- -- -- -- // -- -- -- ---  //

export class InvalidClientId extends CustomError{
  constructor(){
    super(404,"Verifique o id do cliente")
  }
}