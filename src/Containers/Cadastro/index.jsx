import { useSelector } from "react-redux"
import { Container, Sidebar, Pagina } from '../../Style/Styles';
import BarraSuperior from "../BarraSuperior"
import MenuLateral from "../MenuLateral"
import * as S from './style'
import { Link } from "react-router";


export const Cadastro = ({onMenuClick}) => {

    const menu = useSelector((state) => state.menuReducer.value)

    return (
        <Container>
                <BarraSuperior />
            <Sidebar menuAberto={menu}>
                <MenuLateral onMenuClick={onMenuClick}/>
            </Sidebar>
            <Pagina menuAberto={menu}>
                <h1>Cadastrar na agenda</h1>
                <S.Formulario>
                    <label id="nome">Nome do Contato: </label>
                    <S.Campo type="text" htmlFor="nome"/>
                    <label id="nome">Endereço: </label>
                    <S.Campo type="text" htmlFor="nome"/>
                    <label id="nome">Email: </label>
                    <S.Campo type="text" htmlFor="nome"/>
                    <label id="nome">Telefone: </label>
                    <S.Campo type="text" htmlFor="nome"/>
                </S.Formulario>
                <button>Clique aqui</button>
            </Pagina>
        </Container>
    )
}

export default Cadastro