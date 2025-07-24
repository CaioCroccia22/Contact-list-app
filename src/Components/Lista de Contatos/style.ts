import styled from "styled-components";
import { colors } from "../../Style/colors";

type Props = {
    menuAberto: boolean;
}


export const MainCotent = styled.div<Props>`
    height: 100vh;
    position: fixed;
`

export const PaginaLista = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${({ menuAberto }) => (menuAberto ? '92%' : '100%')};;
    position: fixed;
    top: 80px;
    transition: transform 0.3s ease-in-out; 
    transform: ${({ menuAberto }) => (menuAberto ? 'translateX(200px)' : 'translateX(0)')};

`

export const Titulo = styled.caption<Props>`
    font-size: 24px;
    padding: 20px 0px 20px 0px;

`

export const TabelaContato = styled.table<Props>`
    background-color: ${colors.azulClaro};
    border-radius: 20px;
    width: ${({menuAberto}) => (menuAberto ? '70%' : '80%')};
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
   }
        th {
            width: ${({menuAberto}) => (menuAberto ? '12.00%' : '16.66%')}; 
            padding: 12px;
            background-color: #f0f0f0;
            border-bottom: 2px solid #ddd;
            font-weight: bold;
            overflow: hidden; /* Evita que conteúdo longo quebre o layout */
            text-overflow: ellipsis; /* Adiciona "..." se o texto for muito longo */
            white-space: nowrap; /* Impede quebras de linha */
        }
    

`


export const CorpoTabela = styled.tbody<Props>`
 td {
    width: ${({menuAberto}) => (menuAberto ? '12.00%' : '16.66%')}; 
    padding: 12px;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`