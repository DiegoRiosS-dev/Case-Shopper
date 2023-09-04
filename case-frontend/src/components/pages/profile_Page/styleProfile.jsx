import styled from "styled-components";

export const TitleProfile = styled.h1 `
  font-size: 32px;
  text-shadow: 1px 2px 5px #00000083;
  font-style: italic;
  text-align: center;
`// --- --- ---- //// --- --- ---- //

export const Order = styled.span `
  font-size: 20px;
  margin: 5px;
  font-weight: 500;
`
export const Order_List = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid #000000bb; */
  box-shadow: 1px 2px 0px #000000a0;
  border-radius: 5px;
  padding: 2px;
  margin: 4px 2px;
`
export const ordertType = styled.span `
  font-size: 22px;
  font-weight: 500;
`
export const Div_Order_Type = styled.div `
  display: flex;
  justify-content: space-between;
  width: 98%;
  span:nth-child(1){
    margin-left: 10px;
  }
`
export const Div_Order_List = styled.div `
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: 15px auto;
  padding: 10px;
  border: 1px solid #00000067;
  border-radius: 5px;
  box-shadow: 1px 2px 5px #000;
  span:nth-child(1){
    color: #3a0101;
  }
  span:nth-child(2){
    color: #014b39;
  }
  
`// --- --- ---- //// --- --- ---- //
export const Load = styled.span `
  font-size: 32px;
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
  width: 280px;
  margin: 0 auto;
  padding-top: 8px;
  height: 65px;
  box-sizing: border-box;
  background-color: #000000f8;
  border-radius: 20px 0 20px 0 ;
  text-align: center;
`// --- --- ---- //// --- --- ---- //
export const Profile_Control = styled.div `
  width: 100%;
  margin-top: 10px;
  min-height: 40vh;
  max-height: 55vh;
  margin-bottom: 10px;
  padding: 20px 0;
  overflow-y: scroll;
  
  @media (max-width: 550px){
    width: 95%;
    height: 45vh;
    overflow-y: scroll;
    ${ordertType}{
      font-size: 17px;
    }
    ${Div_Order_List}{
      width: 95%;
    }
    ${Order}{
      font-size: 14px;
    }
  }
  @media (max-width: 350px){
    
  }
`