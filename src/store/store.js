import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todolist/todoSlice";
import { countriesApi } from "../services/countries";
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from "../services/products";

export const store = configureStore({
    reducer: {
        count: counterReducer,
        todos: todoReducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware),
})

setupListeners(store.dispatch)