import { useSelector, useDispatch } from "react-redux"
import 'hamburgers/dist/hamburgers.min.css';
import * as S from './style'
import MenuLateral from '../MenuLateral';
import { toogleMenu } from "../../Store/Menu";


const BarraSuperior = () => {
    
    const menu = useSelector((state) => state.menuReducer.value)
    const menuDispatch = useDispatch()
    
    return (
    <>
        <S.Menu menuAberto={menu}>
            <S.BotaoHamburguer 
                // Dispatch dispara uma action para o reducer
                //  logo não podemos mudar diretamente o estado
                onClick={() => menuDispatch(toogleMenu())} 
                className={`hamburger hamburger--elastic-r ${menu ? 'is-active' : ''}`}
                tabIndex="0"
                aria-label="Menu" 
                role="button" 
                aria-controls="navigation">
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </S.BotaoHamburguer >
            
        </S.Menu> 
    </>
           )
}

export default BarraSuperior;