import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import cartInterface from '../../interface/cartInterface';

export interface CartItem extends cartInterface {
    buyerEmail: string;
  }
interface CartState {
    items: CartItem[];
}
// create an initalState
const initialState: CartState = {
    items: [],
  };

  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<CartItem>) => {
        const itemIndex = state.items.findIndex(item => item._id === action.payload._id);
        if (itemIndex === -1) {
          state.items.push(action.payload);
        }
      },
      removeFromCart: (state, action: PayloadAction<string>) => {
        console.log(action.payload);
        state.items = state.items.filter(item => item._id !== action.payload._id);
      },
      clearCart: (state) => {
        state.items = [];
      },
    },
  });
  
  export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
  
  export default cartSlice.reducer;