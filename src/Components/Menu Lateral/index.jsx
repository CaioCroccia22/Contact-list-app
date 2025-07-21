import * as S from './styles'
// import * from '../../img'
import homeIcon from '../../img/home.png'
import listIcon from '../../img/person.png'
import personAdd from '../../img/person-add.png'
import setting from '../../img/settings.png'


const MenuLateral = () => {
    return (
        <S.barraLateral>
            <S.Titulo>
                    <h1>Bem Vindo!!</h1>
            </S.Titulo>
                <S.Navegacao>
                    <S.Lista>
                        <a>
                            <S.listElement>
                                <li>Home</li>
                                <img src={homeIcon}/>
                            </S.listElement>
                        </a>
                        <a>
                            <S.listElement>
                                <li>Contatos</li>
                                <img src={listIcon}/>
                        </S.listElement>
                        </a>
                        <a>
                            <S.listElement>
                                <li>Adicionar Contatos</li>
                                <img src={personAdd}/>
                            </S.listElement>
                        </a>
                        <a>
                            <S.listElement>
                                <li>Configurações</li>
                                <img src={setting}/>
                            </S.listElement>
                        </a>
                    </S.Lista>
                </S.Navegacao>
        </S.barraLateral>
    )
}

export default MenuLateral