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

export const Titulo = styled.div<Props>`
    font-size: 24px;
    padding: 20px 0px 20px 0px;

`

export const TabelaContato = styled.table`
    background-color: ${colors.azulClaro};
    border-radius: 20px;
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    // justify-content: center;
`

export const CabecalhoTabela = styled.thead`
    display: flex;
    width: 80%;
    justify-content: space-between;
    // gap: 150px;

    th {
        font-size: 14px;
        font-family: Inter;
    }

`


export const CorpoTabela = styled.tbody`
    display: flex;
    width: 80%;
    justify-content: space-between;
    padding-top: 30px;
    
    tr{
        padding-top: 20px;
    }

    th {
        font-size: 14px;
        font-family: Inter;
        
    }

`