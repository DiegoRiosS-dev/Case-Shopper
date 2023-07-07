import { CustomError } from "./CustomError";

export class Unauthorized extends CustomError{ 
  constructor(){
    super(401, "Usuário não autorizado!")
  }
};
// --- -- -- -- -- -- -- // -- -- -- ---  // -- -- -- -- -- -- --- //
export class InvalidInputClient extends CustomError{
  constructor(){
    super(422,"Insira um nome")
  }
};
// --- -- -- -- -- -- -- // -- -- -- ---  // -- -- -- -- -- -- --- //

export class UserAlreadyCadasted extends CustomError{
  constructor(name:string){
    super(409,`O cliente ${name} ja está cadastrado!`)
  }
};
