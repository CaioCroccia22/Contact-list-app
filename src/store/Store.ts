import { configureStore } from "@reduxjs/toolkit";
import { contatoSlice } from "./Contatos";

export const Store = configureStore ({
    reducer: {
        contatoReducer: contatoSlice.reducer
    }
})

export type RootState = ReturnType<typeof Store.getState>