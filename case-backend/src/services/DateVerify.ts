import { DateVerifyOutput } from "../type/DataModels";

export class DateVerify {

  public dateVerify = (data:string):DateVerifyOutput => {
    const regexBR = new RegExp(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g);
    const currentDate = new Date()
    const day = currentDate.getDate();
    const month = currentDate.getMonth()+1;
    const year = currentDate.getFullYear();
  
    // DMA D = dia, M = mes, A = ano
    const DMA: number[] = [day,month,year];
    let codeErr:number = 0;
    let errorMsg:string = "";
    let validDate: boolean = false;
  
    const verificarData = regexBR.test(data);
  
    let d = Number(data.split("/")[0]); // pega o dia da data
    let m = Number(data.split("/")[1]); // o mes da data
    let a = Number(data.split("/")[2]); // o ano da data
  
    if(a < year){ // Verificação do ano
      codeErr = 409;
      errorMsg = "Ano invalido: Verifique se o ano é atual ou de uma data futura";
    } else if(d < day && m === month && a === year || d < day && m < month && a === year){ // Verificação do dia
      codeErr = 409;
      errorMsg = "Dia invalido: Verifique se o dia é atual ou de uma data futura" ;
    } else if(d >= day && m < month && a === year){ // Verificação do mes
      codeErr = 409;
      errorMsg = "Mes invalido: Verifique se o dia é atual ou de uma data futura";
    } else if(!verificarData){ 
      codeErr = 422;
      errorMsg = "Formato de data incorreto, digite  desta forma 'dia/mes/ano'";
    }  else {
      validDate = true;
    }
    
    return {validDate, codeErr, errorMsg, DMA}
  };  
}