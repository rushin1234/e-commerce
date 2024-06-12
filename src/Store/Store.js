import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Features/CartSlicer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})