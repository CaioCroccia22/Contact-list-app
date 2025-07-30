import styled, { createGlobalStyle } from "styled-components"
import { colors } from "./colors"



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