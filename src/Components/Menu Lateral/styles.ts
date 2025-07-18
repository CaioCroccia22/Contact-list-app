import styled from "styled-components";
import { colors } from "../../Style/colors";


type Props = {
    aberto?: boolean
}

export const barraLateral = styled.div<Props>`
    top: 0;
    left: 0;
    // max-height: 80vh;
    margin-top: 20px;
    height: 100vh;
    max-width: 100%;
    background-color: ${colors.cinza};
    position: fixed;
    transition: transform 0.3s ease-in-out;
`

export const Titulo = styled.div`
    display: flex;
    align-itens: center;
    justify-content: center;
    height: 10vh;
    // background-color: ${colors.azul};
    margin: 0px 0px 30px 30px;
    font-size: 16px;
`