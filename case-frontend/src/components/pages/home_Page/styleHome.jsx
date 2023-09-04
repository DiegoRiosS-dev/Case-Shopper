import styled from "styled-components";

export const TitleHome = styled.h1 `
  font-size: 35px;
  text-shadow: 1px 2px 5px #00000083;
  font-style: italic;
`// --- --- ---- //// --- --- ---- //
export const Div_prodQuant = styled.div `
  width: 150px;
  border: 1px solid #000;
  z-index: 5;
`

export const BTnShowMore = styled.input`
  cursor: pointer;
  max-width: 200px;
  width: 180px;
  padding: 5px 10px;
  font-size: 22px;
  font-weight: bold;
  border-radius: 10px;
  background-color: #000000f0;
  color: #fffffff0;

  @media (max-width: 420px){
    padding: 3px 3px;
    font-size: 20px;
    width: 8em
  }
`
export const DivButton = styled.div `
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  :hover{
    box-shadow: 1px 2px 2px #401500;
  }
`// --- --- ---- //// --- --- ---- //
export const Product_Load = styled.span `
  font-size: 44px;
  display: block;
  margin: 0 auto;
  background: -webkit-linear-gradient( 
    90deg, #d86c01f5, #900828, #a53400
  );
  -webkit-background-clip:text;
  background-clip: text;
  color: transparent;
  border-right: 3px solid #fff;
  animation: texto 5s steps(110, end) alternate infinite;
  
  @keyframes texto {
    0%{
      width: 0;
      border-color: transparent; 
    }50%{ 
      border-color: #fff; 
    }100%{
      width: 90%;
      border-color: transparent;
    }
  } 
`
export const Div_Load = styled.div `
  width: 320px;
  padding-top: 8px;
  height: 75px;
  box-sizing: border-box;
  background-color: #000000f8;
  border-radius: 20px 0 20px 0 ;
  text-align: center;
`// --- --- ---- //// --- --- ---- //
export const ProductButton = styled.input `
  text-align: center;
  color: #dedcdc;
  padding: 5px 10px;
  background-color: #1c0202;
  border-radius: 10px;
  border: 1px solid #000;
`
export const Product = styled.span `
  text-align: center;
  color: #000;
  font-weight: bold;
`
export const ProductQty = styled.span `
  display: block;
  position: absolute;
  color: #000;
  top: 0;
  right: 6%;
`
export const Product_Card = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #0000004d;
  box-shadow: 1px 1px 1px #00000085;
  border-radius: 5px;
  min-height: 180px;
  
  span:nth-child(2){
    margin-top: 10px;
  }
  ${ProductButton}:hover{
    cursor: pointer;
    background-color: #d4d4d4;
    color: #000;
    
    font-weight: bold;
  }
`
export const Product_Control = styled.div `
  background-color: #ebebeb;
  display: grid;
  max-width: 1200px;
  height: 100%;
  grid-template-columns: repeat(auto-fill,170px);
  justify-content:center;
  gap:10px;
  box-sizing: border-box;
  box-shadow: 0px 5px  5px #0c0c0c86; 
  margin: 0 auto;
  padding: 20px 30px;
  border-radius: 5px;
  border-top: 1px solid #00000041;
  ${Product_Card}:hover{
    box-shadow: 2px 3px 3px #000000c1;
  }
  @media (max-width: 1200px){
    width: 95%;
  }
  @media (max-width: 400px){
    display: grid;
    grid-template-columns: repeat(auto-fill,140px);
  }
  @media (max-width: 340px){
    display: grid;
    grid-template-columns: repeat(auto-fill,120px);
    gap: 5px;
  }
`// --- --- ---- //// --- --- ---- //
export const Home_Section_Control = styled.div `
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  flex-direction: column;
  margin-top: 50px;
  @media (max-width: 600px) {
    h1{
      font-size: 28px;
    }
    ${Div_Load}{
      width: 270px;
      height: 65px;
      span{
        font-size: 30px;
      }
    }
    ${Product_Control}{
      padding: 15px 5px;
      border: none;
      width: 95%;
      height: 60vh;
      box-shadow: none;
      border: 1px solid #00000082;
      overflow-y: scroll;
      span{
        font-size: 15px;
      }
    }
  }
`