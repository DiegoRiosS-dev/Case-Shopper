import styled from "styled-components";

export const Btn_Control_ConfirmORClear = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  div { // mexe na div do component Button
    margin: 8px 0;
  }
  div button { // mexe no button do component Button :)
    margin: 5px;
    width: 7em;
    font-size: 17px;
    padding: 2px;
  }
`// --- --- ---- //// --- --- ---- //
export const Cart_Empty = styled.h2 `
  font-size: 30px;
  text-shadow: 1px 2px 5px #00000083;
  font-style: italic;
  text-align: center;
`
export const TitleCart = styled.h1 `
  font-size: 35px;
  text-shadow: 1px 2px 5px #00000083;
  font-style: italic;
  text-align: center;
`// --- --- ---- //// --- --- ---- //
export const Product = styled.span `
  font-size: 20px;
  margin: 5px;
  font-weight: 500;
`
export const Btn_Input = styled.input `
  height: 22px;
  width: 22px;
  margin: 1px;
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;
`
export const Div_Buttons = styled.div `
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  input:nth-child(1){
    color:blue;
  };
  input:nth-child(2){
    color: red;
  }
  input:hover{
    scale: 1.1;
  }
`
export const Div_Product = styled.div `
  position: relative;
  width: 450px;
  display: flex;
  justify-content: flex-start;
  margin: 5px 5px 0 0;
  padding: 4px 0;
  border: 1px solid #00000067;
  border-radius: 5px;
  
  box-shadow: 1px 2px 5px #000;
  span:nth-child(2){
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 280px;
  }
  span:nth-child(3){
    position: absolute;
    right: 3px;
    margin: 5px 2px;
  }
`
export const Div_Control_Product = styled.div `
  max-width: 480px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  
`// --- --- ---- //// --- --- ---- //
export const Cart_Page_Control = styled.div `
  width: 100%;
  height: 60vh;
  margin-bottom: 10px;
  padding: 20px 0;
  overflow-y: scroll;
  @media (max-width: 550px){
    width: 95%;
    height: 45vh;
    overflow-y: scroll;
    ${Div_Product}{
      max-width: 280px;
      span:nth-child(2){
        width: 170px;
      }
      ${Product}{
        font-size: 17px;
      }
    }
    ${Btn_Input}{
      height: 19px;
      width: 19px;
    }
  }
  @media (max-width: 350px){
    ${Div_Product}{
      span:nth-child(2){
        width: 130px;
      }
    }
  }
`

