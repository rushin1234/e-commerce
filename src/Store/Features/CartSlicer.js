import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_to_cart: (state, action) => {
      const id = Number(action.payload)
      const existingIndex = state.cartItems.findIndex((item)=>item.id === id)
      if(existingIndex === -1) {
        // not exist
        const item = {id: id, quantity: 1}
        state.cartItems.push(item)
      }
      else {
        // exist
        state.cartItems[existingIndex].quantity += 1
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      toast("Product is added in Cart!")

    },

    remove_item: (state, action) => {
      const id = Number(action.payload)
      const existingIndex = state.cartItems.findIndex((item)=>item.id === id)
      state.cartItems[existingIndex].quantity -= 1
      if(state.cartItems[existingIndex].quantity <= 0) {
        state.cartItems.splice(existingIndex, 1)
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

    },

  },
})

// Action creators are generated for each case reducer function
export const { add_to_cart, remove_item } = cartSlice.actions

export default cartSlice.reducer