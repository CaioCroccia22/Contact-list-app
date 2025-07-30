import { useSelector } from "react-redux"
import { Container } from "../../Style/Styles"
import BarraSuperior from "../BarraSuperior"


export const Cadastro = () => {

    const menu = useSelector((state) => state.menuReducer)
    const menuState = () => {
        console.log(menu)
    }

    return (
        <Container>
            {/* <BarraSuperior 
                    menuAberto={menu}
                    setMenuAberto={menu}  /> */}
            <h1>Teste</h1>
            <form>
                <label id="nome">Preencha aqui: </label>
                <input type="text" htmlFor="nome"/>
            </form>
            <button onClick={menuState}>Clique aqui</button>
        </Container>
    )
}

export default Cadastro