import styled from 'styled-components';

export const Link = styled.span `
  color: #fff;
  text-decoration: none;
  font-family: 'Open sans condensed', sans-serif;
  font-size: 22px;
  transition: 650ms;
  padding:10px 8px;
  cursor: pointer;
  border-radius: 10px;
  
`
export const List = styled.li `
  list-style: none;
  box-sizing: border-box; 
  margin: 0 10px;
  :hover{
    background-color: #e1d7ed;
    color: #000
  }
`
export const Nav_List = styled.ul `
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
export const Nav_div = styled.div `
  margin-top: 30px;
`
export const Nav_Bar = styled.nav `
  height: 82px;

  display: flex;
  justify-content: space-between;
  div:first-child{
    padding-left: 20px;
  }
`

export const Main_Div_Header = styled.header `
  background-color: #000;
  width: 100%;
  min-height: 90px;
  box-sizing: border-box;
  padding: 10px;
  
  @media (max-width: 420px) {
    ${Link}{
      font-size: 18px;
    }
    ${List}{
      margin: 0 2px;
    }
    ${Nav_Bar}{
      div:first-child{
        padding: 0;
      }
    }
  }
`