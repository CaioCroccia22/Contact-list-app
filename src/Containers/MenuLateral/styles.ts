import styled from "styled-components";
import { colors } from "../../Style/colors";


type Props = {
    aberto?: boolean
}



export const barraLateral = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-itens: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${colors.preto};
    position: fixed;
    transition: transform 0.3s ease-in-out;
`

export const Titulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    // background-color: ${colors.azul};
    font-size: 16px;
`

export const BotaoHamburguer = styled.button<Props>`
  display: ${({ aberto }) => (aberto ? 'None' : 'block')};
  margin-right: 30px;
  cursor: pointer;
//   margin-left: 20px;
//   z-index: 1100;
  background: none;
  border: none;
  padding: 0;
  .hamburger-box {
    width: 20px;
    height: 20px;
`;


export const Navegacao = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const Lista = styled.ul`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-itens: center;
    width: 100%;
    height: 35%;
    // padding: 0px 10px 0px 10px;
    
`


export const listElement = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px 0px 50px;
    color: white;
    
    img{ 
        height: 40px;
        width: 40px;
        
     }

`
