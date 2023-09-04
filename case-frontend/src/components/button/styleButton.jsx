import styled from 'styled-components'


export const Button = styled.button `
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
`