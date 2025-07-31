import styled from "styled-components";
import { colors } from "../../Style/colors";


export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    width: 40%

`

export const Campo = styled.input`
    border-radius: 20px;
    border: none;
    padding: 5px 20px;
    margin: 10px 0px;
    width: 90%;
    background-color: ${colors.azulClaro};
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);


`