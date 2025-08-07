import { useDispatch, useSelector } from "react-redux"
import { Container, Sidebar, Pagina } from '../../Style/Styles';
import BarraSuperior from "../BarraSuperior"
import MenuLateral from "../MenuLateral"
import * as S from './style'
import {adicionar} from '../../Store/Contatos'
import { useState } from "react";


export const Cadastro = ({onMenuClick}) => {
    const Contato = useSelector((state) => state.contatoReducer.itens)
    const dispatch = useDispatch()
    const menu = useSelector((state) => state.menuReducer.value)
    const [formulario, setFormulario] = useState({
        nome: '',
        endereco: '',
        telefone: '',
        email: ''
    })

    const handleInput = (e) => {
        const {name, value} = e.target
        setFormulario({...formulario, [name]: value,})
        
    }

    function SubmitForm (){
        dispatch(adicionar(formulario))
        console.log(Contato)
        setFormulario({
            nome: '',
            endereco: '',
            telefone: '',
            email: ''
        })
    }

    return (
        <Container>
                <BarraSuperior />
            <Sidebar menuAberto={menu}>
                <MenuLateral onMenuClick={onMenuClick}/>
            </Sidebar>
            <Pagina menuAberto={menu}>
                <h1>Cadastrar na agenda</h1>
                <S.Formulario menuAberto={menu}>
                    <label htmlFor="nome">Nome do Contato: </label>
                    <S.Campo 
                        type="text"  
                        id="nome"
                        value={formulario.nome}
                        onChange={handleInput}
                        name="nome"
                        />
                    <label htmlFor="endereco">Endereço: </label>
                    <S.Campo 
                        type="text"  
                        id="endereco"
                        value={formulario.endereco}
                        onChange={handleInput}
                        name="endereco"
                        />
                    <label htmlFor="email">Email: </label>
                    <S.Campo 
                        type="text"  
                        id="email"
                        value={formulario.email}
                        onChange={handleInput}
                        name="email"
                        />
                    <label htmlFor="telefone">Telefone: </label>
                    <S.Campo 
                        type="text"  
                        id="email"
                        value={formulario.telefone}
                        onChange={handleInput}
                        name="telefone"
                        />
                </S.Formulario>
                <S.BotaoUtilitario 
                    onClick={SubmitForm}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                     Cadastrar      
                </S.BotaoUtilitario>
            </Pagina>
        </Container>
    )
}

export default Cadastro