import { CustomError } from "./CustomError";

export class Unauthorized extends CustomError{ 
  constructor(){
    super(401, "Usuário não autorizado!")
  }
};
// --- -- -- -- -- -- -- // -- -- -- ---  // -- -- -- -- -- -- --- //
export class InvalidInputClient extends CustomError{
  constructor(){
    super(422,"Insira um nome, email e senha")
  }
};
// --- -- -- -- -- -- -- // -- -- -- ---  // -- -- -- -- -- -- --- //

export class EmailAlreadyCadasted extends CustomError{
  constructor(){
    super(409,`email já  cadastrado!`)
  }
};
// --- -- -- -- -- -- -- // -- -- -- ---  // -- -- -- -- -- -- --- //
export class InputEmailIncorrect extends CustomError{
  constructor(){
    super(422,"verifique se 'email' foi digitado corretamente deve conter '@'! ")
  }
};// --- -- -- -- -- -- -- // -- -- -- ---  // -- -- -- -- -- -- --- //
export class InvalidImputPassword extends CustomError{
  constructor(){
    super(422,"Senha deve conter ao menos 8 caracteres um sendo maiusculo e nenhum 'ESPECIAL' ")
  }
};
// --- -- -- -- -- -- -- // -- -- -- ---  // -- -- -- -- -- -- --- //
export class InvalidImputLogin extends CustomError{
  constructor(){
    super(422,"Digite o email e senha!")
  }
};

export class loginEmailOrPassIncorrect extends CustomError{
  constructor(){
    super(409,"Verifique se o email e senha estão corretos!")
  }
}

