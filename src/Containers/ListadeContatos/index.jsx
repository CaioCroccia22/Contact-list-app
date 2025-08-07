import { useState } from 'react';
import BarraSuperior from '../BarraSuperior';
import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'; 
import { Container, Sidebar, Pagina } from '../../Style/Styles';
import MenuLateral from '../MenuLateral';
import {remover, editar} from '../../Store/Contatos'




 const ListaDeContato = ({onMenuClick}) => {
    const contatosCadastrados = useSelector((state) => state.contatoReducer)

    const menu = useSelector((state) => state.menuReducer.value)
    const contactDispatch = useDispatch()
    const [editContato, setContato] = useState({
        id: '',
        nome: '',
        endereco: '',
        email: '',
        telefone: '',
    })

    function getContactId(id){
        const getContato = contatosCadastrados.itens.find((index) => index.id === id)
        setContato(getContato)
    }

    function handleAction(editContato){
        console.log(editContato)
        contactDispatch(editar(editContato))
        setContato({
        id: '',
        nome: '',
        endereco: '',
        email: '',
        telefone: '',
    })
        
    }

    function cancel(){
        setContato({
        id: '',
        nome: '',
        endereco: '',
        email: '',
        telefone: '',
    })
    }

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
                            <td>
                                { item.id }
                            </td>
                            <td>
                                {editContato.id === item.id ? (
                                    <input
                                    type='text'
                                    value={editContato.nome}
                                    onChange={(e) => setContato({...editContato, nome: e.target.value})}
                                    />
                                ) : ( item.nome ) }
                            </td>
                            <td >
                                { editContato.id === item.id ? (
                                    <input
                                    type='text'
                                    value={editContato.endereco}
                                    onChange={(e) => setContato({...editContato, endereco: e.target.value})}
                                    />
                                ) : ( item.endereco )}
                            </td>
                            <td>
                                { editContato.id === item.id ? (
                                    <input
                                    type='text'
                                    value={editContato.email}
                                    onChange={(e) => setContato({...editContato, email: e.target.value})}
                                    />
                                ) : ( item.email )}
                            </td>
                            <td>
                                { editContato.id === item.id ? (
                                    <input
                                    type='text'
                                    value={editContato.telefone}
                                    onChange={(e) => setContato({...editContato, telefone: e.target.value})}
                                    />
                                ) : ( item.telefone )}
                            </td>
                            <td>
                                {editContato.id === item.id ? 
                                (
                                <>
                                <S.BotaoUtilitario 
                                    onClick={() => handleAction(editContato)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    >
                                        Salvar
                                    </S.BotaoUtilitario>
                                <S.BotaoUtilitario 
                                    onClick={() => cancel(item.id)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    >
                                        Cancelar
                                    </S.BotaoUtilitario>
                                </>
                                ) 
                                : 
                                (
                                <>
                                <S.BotaoUtilitario 
                                    onClick={() => getContactId(item.id)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    >
                                        Editar
                                </S.BotaoUtilitario>
                                <S.BotaoUtilitario 
                                    onClick={() => contactDispatch(remover(item))}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    >
                                        Excluir
                                </S.BotaoUtilitario> 
                                </>  
                                )}
                            </td>
                            {/* <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.endereco}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>
                            
                            <S.BotaoUtilitario onClick={() => contactDispatch(remover(item))}>Excluir</S.BotaoUtilitario>
                            </td> */}
                        </tr>))}
                    </S.CorpoTabela>
                </S.TabelaContato>
            </Pagina>
        </Container>
    )
}


export default ListaDeContato