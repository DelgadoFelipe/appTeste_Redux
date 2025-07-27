import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from './contadorSlice.js'

export const store = configureStore({
        reducer: {
            contador: contadorReducer,
        }
});



