import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
    value: boolean
}

const initialState: MenuState = {
    value: true
}


export const menuSlice = createSlice({
    name: 'Menu',
    initialState: initialState,
    reducers: {
        toogleMenu: (state) => {
            state.value = !state.value
        }
    },
})

export const {toogleMenu} = menuSlice.actions
export default menuSlice.reducer