import styled, { createGlobalStyle } from "styled-components"
import { colors } from "./colors"

export type Props = {
    menuAberto: boolean
}

export const GlobalStyled = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;

    
}

a{ 
    cursor: pointer;
}

`

export const Container = styled.div`
    height: 100vh;
    position: fixed;
    background-color: ${colors.branco};
    width: 100vw;
    height: 100vh
`

export const Pagina = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${({ menuAberto }) => (menuAberto ? '88%' : '100%')};;
    position: fixed;
    top: 80px;
    transition: transform 0.3s ease-in-out; 
    transform: ${({ menuAberto }) => (menuAberto ? 'translateX(250px)' : 'translateX(0)')};
`

export const Sidebar = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 10vh;
  left: 0;
  width: 25%;
  height: 100%;
  background-color: ${colors.cinza};
  color: white;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ menuAberto }) => (menuAberto ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
`;