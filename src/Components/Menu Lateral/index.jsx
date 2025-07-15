import * as S from './styles'

const MenuLateral = () => {
    return (
        <S.barraLateral>
            <S.Titulo>
                    <h1>Olá, seja bem Vindo</h1>
            </S.Titulo>
            <div>
                <nav>
                    <ul>
                        <li>Clientes</li>
                        <li>Contatos</li>
                        <li>Tipo de Contatos</li>
                        <li>Tipo de Clientes</li>
                        <li>Licenças</li>
                    </ul>
                </nav>
            </div>
        </S.barraLateral>
    )
}

export default MenuLateral