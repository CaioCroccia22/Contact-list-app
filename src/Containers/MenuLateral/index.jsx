import * as S from './styles'
// import * from '../../img'
import homeIcon from '../../img/home.png'
import personAdd from '../../img/user.png'
import setting from '../../img/config.png'

import { motion } from "motion/react"
import { colors } from '../../Style/colors'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { toogleMenu } from '../../Store/Menu'


const MenuLateral = () => {

    const menu = useSelector((state) => state.menuReducer.value)
    const menuDispatch = useDispatch()

    return (
        <S.barraLateral>
            <S.Titulo>Bem Vindo!!</S.Titulo>
            <S.Navegacao>
                <S.Lista>
                    <S.StyledLink to="/">
                        <S.MenuButton
                        whileHover={{ backgroundColor: `${colors.cinza}`, opacity: 1, scale: 0.95 }}
                        whileTap={{ scale: 0.80 }}
                        whileInView={{ backgroundColor: `${colors.preto}`}}> 
                                <S.listElement>
                                    <a>Home</a>
                                    <img src={homeIcon}/>
                                </S.listElement>
                        </S.MenuButton>
                    </S.StyledLink>
                    <S.StyledLink to="/cadastro">
                        <S.MenuButton
                        whileHover={{ backgroundColor: `${colors.cinza}`, opacity: 1, scale: 0.95 }}
                        whileTap={{ scale: 0.80 }}
                        whileInView={{ backgroundColor: `${colors.preto}`}}> 
                                <S.listElement>
                                    <a>Cadastro Contato</a>
                                    <img src={personAdd}/>
                                </S.listElement>
                        </S.MenuButton>
                    </S.StyledLink>
                    <S.StyledLink to="/cadastro">
                        <S.MenuButton
                        whileHover={{ backgroundColor: `${colors.cinza}`, opacity: 1, scale: 0.95 }}
                        whileTap={{ scale: 0.80 }}
                        whileInView={{ backgroundColor: `${colors.preto}`}}> 
                                <S.listElement>
                                    <a>Configuração</a>
                                    <img src={setting}/>
                                </S.listElement>
                        </S.MenuButton>
                    </S.StyledLink>
                    </S.Lista>
                </S.Navegacao>
        </S.barraLateral>
    )
}

export default MenuLateral