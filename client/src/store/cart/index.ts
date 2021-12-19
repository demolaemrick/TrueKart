import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { ICart } from '../../types';

interface CartState {
  items: ICart[];
  totalPrice: number;
  totalQuantities: number;
}
const initialState: CartState = {
  items: [],
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
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
