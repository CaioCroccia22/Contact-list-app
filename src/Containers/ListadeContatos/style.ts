import styled from "styled-components";
import { colors } from "../../Style/colors";

type Props = {
    menuAberto: boolean;
}



export const PaginaLista = styled.div<Props>`
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
  width: 350px;
  height: 100%;
  background-color: ${colors.cinza};
  color: white;
  padding: 20px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ menuAberto }) => (menuAberto ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
`;

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