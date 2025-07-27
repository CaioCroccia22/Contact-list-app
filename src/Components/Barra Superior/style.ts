import styled from "styled-components";
import { colors } from "../../Style/colors";

 export type Props = {
    menuAberto: boolean
 }

export const Menu = styled.div<Props>`
display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: ${colors.azulClaro};
  position: fixed; 
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out; 
  transform: ${({ menuAberto }) => (menuAberto ? 'translateX(350px)' : 'translateX(0)')};
  z-index: 900;

`


export const BotaoHamburguer = styled.div<Props>`
    cursor: pointer;
    margin-left: 20px; 
    z-index: 1100; 
`;


export const Sidebar = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 350px; 
  height: 100%;
  background-color: ${colors.cinza}; 
  color: white;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ menuAberto }) => (menuAberto ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 1000; 
`;
