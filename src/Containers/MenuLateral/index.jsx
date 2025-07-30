import * as S from './styles'
// import * from '../../img'
import homeIcon from '../../img/home.png'
import listIcon from '../../img/person.png'
import personAdd from '../../img/person-add.png'
import setting from '../../img/settings.png'

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
            <S.Titulo>
                    <h1>Bem Vindo!!</h1>
            </S.Titulo>
                <S.Navegacao>
                    <S.Lista>
                        <motion.button 
                        whileHover={{ backgroundColor: `${colors.cinza}`, opacity: 1, scale: 0.95 }}
                        whileTap={{ scale: 0.80 }}
                        whileInView={{ backgroundColor: `${colors.preto}`}}> 
                                <S.listElement>
                                    <a>Home</a>
                                    <img src={homeIcon}/>
                                </S.listElement>
                        </motion.button>

                        <motion.button 
                        whileHover={{ backgroundColor: `${colors.cinza}`, opacity: 1, scale: 0.95 }}
                        whileTap={{ scale: 0.80 }}
                        whileInView={{ backgroundColor: `${colors.preto}`}}> 
                            <S.listElement>
                                <Link to="/cadastro">Adicionar Contatos</Link>
                                <img src={personAdd}/>
                            </S.listElement>
                        </motion.button>

                        <motion.button 
                        whileHover={{ 
                            backgroundColor: `${colors.cinza}`, opacity: 1, scale: 0.95 
                        }}
                        whileTap={{ scale: 0.80 }}
                        whileInView={{ backgroundColor: `${colors.preto}`}}
                        > 
                            <S.listElement><a>Contatos</a><img src={listIcon}/></S.listElement>
                        </motion.button>
                        <motion.button 
                        whileHover={{ 
                            backgroundColor: `${colors.cinza}`, opacity: 1, scale: 0.95 
                        }}
                        whileTap={{ scale: 0.80 }}
                        whileInView={{ backgroundColor: `${colors.preto}`}}
                        > 
                            <S.listElement><a>Configurações</a><img src={setting}/></S.listElement>
                        </motion.button>
                    </S.Lista>
                </S.Navegacao>
        </S.barraLateral>
    )
}

export default MenuLateral