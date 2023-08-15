import styled from 'styled-components'

export const LinkToLogin = styled.span `
  font-size: 22px;
  color: #000000b4;
  margin: 0 auto;
  cursor: pointer;
  max-width: 155px;
  
`

export const TitleSignUp = styled.h1 `
  text-align: center;
`
export const Div_Control_SignUp = styled.div `
  max-width: 1220px;
  width: 80%;
  height: 550px;
  padding: 15px 30px;
  border: 1px solid #0000009d;
  margin: 50px auto 0px ;
  background-color: transparent;
  color: #180707ce;
  font-weight: 600;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  border-top: 2px solid #00000095;
  box-shadow: 1px 3px 3px #1d1d1d;
  ${LinkToLogin}:hover{
    color: #db7c07;
    text-shadow:  1px 1px 2px black;
  }
  
  @media (max-width: 620px) {
    width: 100%;
    border: none;
    box-shadow: none;
    padding: 0;
  
    h1{
      margin-top: 40px;
      font-size: 28px;
    }
  }
`