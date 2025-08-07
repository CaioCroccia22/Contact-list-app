import styled from "styled-components";
import { colors } from "../../Style/colors";
import { motion } from "motion/react"

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

export const BotaoUtilitario = styled(motion.button)`
    padding: 7px 20px 7px 20px;
    border-radius: 20px;
    border: none;
    margin: 7px;
    color: ${colors.branco};
    background-color: ${colors.cinza};
    cursor: pointer;
    transition: transform 0.3s ease-in-out; 
    

    :hover{
        transform: scale(1.1) rotate(5deg);
    }

`