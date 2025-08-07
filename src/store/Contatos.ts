import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ContatoClass }from "../API/Contato";



//definição da estrura com o interface que é um array (itens) da classe contato
interface ContatoState  {
    itens: ContatoClass[]
}

//Instânciação do objeto 
const initialState: ContatoState = {
    itens: [
        {
            id: 1,
            nome: 'Caio Croccia',
            endereco: 'Rua ola, mundo',
            email: 'Caio@123',
            telefone: 13523442342
        }
    ]
}

export const contatoSlice = createSlice({
    name: 'Contato',
    initialState: initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<ContatoClass>) => {
            const getUltimoContato = state.itens[state.itens.length -1]
            const novoContato = {
                // Com o spread operator é feito uma cópia do payload
                // Pois mudar diretamente  o action Payload é contra as regras do Toolkit
                ...action.payload,
                id: getUltimoContato ? getUltimoContato.id + 1 : 1
            }
            state.itens.push(novoContato)
        },
        remover: (state, action: PayloadAction<ContatoClass>) => {
            const getContatosLenght = state.itens.length
            if (getContatosLenght > 0){
                state.itens = state.itens.filter(item => item.id != action.payload.id)
            }
        },
        editar: (state, action: PayloadAction<ContatoClass>) => {
            const Contato = state.itens.find((item) => item.id === action.payload.id)
            if(Contato) {
                Contato.nome = action.payload.nome
                Contato.endereco = action.payload.endereco
                Contato.email = action.payload.email
                Contato.telefone = action.payload.telefone
            }
        }
    }
})

export const { adicionar, remover, editar } = contatoSlice.actions;
export default contatoSlice.reducer;