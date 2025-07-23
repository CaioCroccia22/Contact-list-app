import 'hamburgers/dist/hamburgers.min.css';
import * as S from './style'
import MenuLateral from '../Menu Lateral';


const BarraSuperior = ( {onMenuClick, menuAberto, setMenuAberto}) => {
    
    return (
    <>
        <S.Menu menuAberto={menuAberto}>
            <S.BotaoHamburguer 
                onClick={() => setMenuAberto(!menuAberto)} 
                className={`hamburger hamburger--elastic-r ${menuAberto ? 'is-active' : ''}`}
                tabIndex="0"
                aria-label="Menu" 
                role="button" 
                aria-controls="navigation">
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </S.BotaoHamburguer >
            
        </S.Menu> 
        <S.Sidebar menuAberto={menuAberto}>
            <MenuLateral onMenuClick={onMenuClick}></MenuLateral>
        </S.Sidebar> 
    </>
           )
}

export default BarraSuperior;