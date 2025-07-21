import { useState } from 'react';
import BarraSuperior from '../Barra Superior';
import * as S from './style'
 


 const listaDeContato = () => {

    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <S.MainCotent menuAberto={menuAberto}>  
                <BarraSuperior 
                    menuAberto={menuAberto}
                    setMenuAberto={setMenuAberto}>
                </BarraSuperior>
            <S.PaginaLista  menuAberto={menuAberto}>
                <S.TabelaContato>
                    <S.Titulo>Contatos</S.Titulo>
                    <S.CabecalhoTabela>
                        <tr><th>ID</th></tr>
                        <tr><th>Nome</th></tr>
                        <tr><th>Endereço</th></tr>
                        <tr><th>Email</th></tr>
                        <tr><th>Telefone</th></tr>
                        <tr><th>Editar/Excluir</th></tr>
                    </S.CabecalhoTabela>
                    <S.CorpoTabela>
                        <tr><tb>Teste</tb></tr>
                    </S.CorpoTabela>
                </S.TabelaContato>

            </S.PaginaLista>
        </S.MainCotent>
    )
}


export default listaDeContato