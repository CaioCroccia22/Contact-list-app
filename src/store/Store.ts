import { configureStore } from "@reduxjs/toolkit";
import { contatoSlice } from "./Contatos";
import { menuSlice } from "./Menu";


export const Store = configureStore ({
    reducer: {
        contatoReducer: contatoSlice.reducer,
        menuReducer: menuSlice.reducer
    }
})

export type RootState = ReturnType<typeof Store.getState>