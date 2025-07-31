import { useState } from 'react';
import BarraSuperior from '../BarraSuperior';
import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'; 
import { Container, Sidebar, Pagina } from '../../Style/Styles';
import MenuLateral from '../MenuLateral';




 const listaDeContato = ({onMenuClick}) => {
    const contatosCadastrados = useSelector((state) => state.contatoReducer)

    const menu = useSelector((state) => state.menuReducer.value)
    const contactDispatch = useDispatch()

    return (
        <Container>  
                <BarraSuperior />
            <Sidebar menuAberto={menu}>
                <MenuLateral onMenuClick={onMenuClick}/>
            </Sidebar> 
            <Pagina  menuAberto={menu}>
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
            </Pagina>
        </Container>
    )
}


export default listaDeContato