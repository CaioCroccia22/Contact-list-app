import { createSlice } from "@reduxjs/toolkit";
import { Contato } from "../API/Contato";

type ContatoState = {
    itens: Contato[]
}

const initialState: ContatoState = {
    itens: [
        {
            ID: 1,
            Nome: 'Caio Croccia',
            Endereco: 'Rua ola, mundo',
            Email: 'Caio@123',
            Telefone: 13523442342

        }
    ]
}

export const contatoSlice = createSlice({
    name: 'Contato',
    initialState: [],
    reducers: {

    }
})