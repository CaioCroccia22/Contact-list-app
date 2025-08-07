import styled from "styled-components";
import { colors } from "../../Style/colors";
import { motion } from "motion/react"

type Props = {
    menuAberto: boolean;
}

export const Titulo = styled.caption<Props>`
    font-size: 24px;
    padding: 20px 0px 20px 0px;

`

export const TabelaContato = styled.table<Props>`
    background-color: ${colors.azulClaro};
    border-radius: 20px;
    width: ${({menuAberto}) => (menuAberto ? '60%' : '80%')};
    align-items: center;
    table-layout: fixed;
    border-collapse: collapse;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    // justify-content: center;
`

export const CabecalhoTabela = styled.thead<Props>`
   tr{
        background-color: red;
        width: 100%;
        background-color: ${colors.preto}
   }
        th {
            width: ${({menuAberto}) => (menuAberto ? '10.00%' : '16.66%')}; 
            padding: 12px;
            color: #f0f0f0;
            border-bottom: 2px solid #f0f0f0;
            font-weight: bold;
            overflow: hidden; /* Evita que conteúdo longo quebre o layout */
            text-overflow: ellipsis; /* Adiciona "..." se o texto for muito longo */
            white-space: nowrap; /* Impede quebras de linha */
        }
    

`


export const CorpoTabela = styled.tbody<Props>`
 td {
    width: ${({menuAberto}) => (menuAberto ? '10.00%' : '16.66%')}; 
    padding: 12px;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
export const BotaoUtilitario = styled(motion.button)`
    padding: 5px;
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