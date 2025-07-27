import { createSlice } from "@reduxjs/toolkit";

const contadorSlice = createSlice({
    name: 'contador',
    initialState: {
        valor: 0,
        teste1: '',
        teste2: '',
        teste3: '',
        teste4: '',
    },
    reducers: {
        incrementar: (state) => {
            state.valor += 1;
        },
        decrementar: (state) => {
            state.valor -= 1;
        },

        setTeste1: (state, action) => {
            state.teste1 = action.payload;
        },

        setTeste2: (state, action) => {
            state.teste2 = action.payload;
        },

        setTeste3: (state, action) => {
            state.teste3 = action.payload;
        },

        setTeste4: (state, action) => {
            state.teste4 = action.payload;''
        },

        resetTeste: (state) => {
            state.teste1 = '';
            state.teste2 = '';
            state.teste3 = '';
            state.teste4 = '';
        }

    },
});

export const {
    incrementar, decrementar,
    setTeste1,
    setTeste2,
    setTeste3,
    setTeste4,
    resetTeste
} = contadorSlice.actions;

export default contadorSlice.reducer;