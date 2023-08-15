import styled from 'styled-components'


export const showPassword = styled.button `
  padding: 5px;
  border-radius: 30%;
  position: absolute;
  right: 2%;
  bottom: 19%;
`

export const InputLabel = styled.label `
  font-size: 1.4rem;
`
export const Input = styled.input `
  font-size: 20px;
  padding: 5px 10px;
  margin: 5px 0;
  
  border: 1px solid #7b7b7b6e ;
  border-radius: 5px;
  ::placeholder{
    color: #7b7b7b;
  } 
  
`
export const DivInput = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  margin: 0 auto;
  border: none;
  position: relative;
  box-sizing: border-box;
  
  @media (max-width: 420px) {
    max-width: 290px;
    
    ${Input}{
      font-size: 18px;
      padding: 5px 7px;
      margin: 3px 0;
    }
    ${showPassword}{
      padding: 4px;
      right: 2%;
      bottom: 17%;
    }
  }
`
export const Form_Control = styled.form `
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`



