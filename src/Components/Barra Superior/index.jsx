import 'hamburgers/dist/hamburgers.min.css';
import { useState } from 'react';
import * as S from './style'
import MenuLateral from '../Menu Lateral';

const BarraSuperior = () => {
    const [estaAtivo, setEstaAtivo] = useState(false)
    return (
    <>
        <S.Menu menuAberto={estaAtivo}>
            <S.BotaoHamburguer 
                onClick={() => setEstaAtivo(!estaAtivo)} 
                className={`hamburger hamburger--elastic-r ${estaAtivo ? 'is-active' : ''}`}
                tabIndex="0"
                aria-label="Menu" 
                role="button" 
                aria-controls="navigation">
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </S.BotaoHamburguer >
            
        </S.Menu> 
        <S.Sidebar menuAberto={estaAtivo}>
            <MenuLateral></MenuLateral>
        </S.Sidebar> 
    </>
           )
}

export default BarraSuperior;