import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/AllSclices/counterSlice.js'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productAPI } from './API/productAPI.js'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [productAPI.reducerPath]: productAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productAPI.middleware)
})
setupListeners(store.dispatch)
