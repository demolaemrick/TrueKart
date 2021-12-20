import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { ICart } from '../../types';

let cartItems;

if (typeof window !== 'undefined') {
  if (localStorage.getItem('cartItems')) {
    let items = window.localStorage.getItem('cartItems');
    cartItems = JSON.parse(items!);
  } else {
    cartItems = [];
  }
}
interface CartState {
  items: ICart[];
  totalPrice: number;
  totalQuantities: number;
}
const initialState: CartState = {
  items: cartItems,
  totalPrice: 0,
  totalQuantities: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ICart>) => {
      const newItem = action.payload;
      state.items = [...state.items, newItem];
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
