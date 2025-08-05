import styled from "styled-components";
import { colors } from "../../Style/colors";

type Props = {
    menuAberto: boolean
}

export const Formulario = styled.form<Props>`
    display: flex;
    flex-direction: column;
    width: ${({menuAberto}) => (menuAberto ? '60%' : '80%')};

`

export const Campo = styled.input`
    border-radius: 20px;
    border: none;
    padding: 5px 20px;
    margin: 10px 0px;
    width: 100%;
    background-color: ${colors.azulClaro};
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);


`