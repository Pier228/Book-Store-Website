
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemExists = state.items.some(item => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push(action.payload);
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
