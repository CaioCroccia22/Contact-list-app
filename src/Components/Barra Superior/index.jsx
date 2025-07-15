import 'hamburgers/dist/hamburgers.min.css';
import { useState } from 'react';
import * as S from './style'
import MenuLateral from '../Menu Lateral';

const BarraSuperior = () => {
    const [estaAtivo, setEstaAtivo] = useState(false)
    return (
        <S.Menu>
            <div 
                onClick={() => setEstaAtivo(!estaAtivo)} 
                className={`hamburger hamburger--elastic-r ${estaAtivo ? 'is-active' : ''}`}
                tabIndex="0"
                aria-label="Menu" 
                role="button" 
                aria-controls="navigation">
                <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                </div>
            </div>
            {estaAtivo ? <MenuLateral></MenuLateral> : ''}
        </S.Menu>
    )
}

export default BarraSuperior;