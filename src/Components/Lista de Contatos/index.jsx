import { useState } from 'react';
import BarraSuperior from '../Barra Superior';
import * as S from './style'
import { useSelector } from 'react-redux'; 



 const listaDeContato = () => {
    const contatosCadastrados = useSelector((state) => state.contatoReducer)

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
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Endereco</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Editar/Excluir</th>
                        </tr>
                    </S.CabecalhoTabela>
                    <S.CorpoTabela>
                        {contatosCadastrados.itens.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.endereco}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>
                            <button>Editar</button>
                            <button>Excluir</button>
                            </td>
                        </tr>))}
                    </S.CorpoTabela>
                </S.TabelaContato>

            </S.PaginaLista>
        </S.MainCotent>
    )
}


export default listaDeContato