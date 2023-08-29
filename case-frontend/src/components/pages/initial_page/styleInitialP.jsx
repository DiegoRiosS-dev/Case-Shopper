import styled from "styled-components";


export const Loading = styled.span `
  background-color: transparent;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-radius: 50%;
  border: 3px solid #fff;
  border-right: 1px solid transparent;
  box-shadow: 1px 1px 1px #dadada5c;
  display: block;
  justify-content: center;
  animation: loading 1.5s ease-in-out infinite;

  @keyframes  loading {
    0%{
      transform: rotate(0deg);
    }100%{
      transform: rotate(360deg);
    }
  }
`
// --- --- -- -- -- -- //
export const Loading_Title = styled.span `
  font-size: 44px;
  display: block;
  background: 
    -webkit-linear-gradient( 
      90deg, #d86c01f5, #900828, #a53400
  );
  -webkit-background-clip:text;
  background-clip: text;
  color: transparent;
  animation: texto 5s steps(110, end) alternate infinite;
  
  @keyframes texto {
    0%{
      transform: scale(1);
      
    }100%{
      transform: scale(1.2);
    }
  }
`
// --- --- -- -- -- -- //
export const Title_Div = styled.div `
  width: 280px;
  height: 70px;
  margin: 20px auto;
  box-sizing: border-box;
  text-align: center;
  background-color: #000000f8;
  border-radius: 20px 0 20px 0 ;
`
// --- --- -- -- -- -- //
export const Div_Loading = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #000000e6;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 420px){

    ${Title_Div}{
      width: 220px;
      background-color: transparent;
    }
  }
`