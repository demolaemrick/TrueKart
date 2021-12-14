import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Product } from '../../types';

interface ProductState {
  value: Product[];
}
const initialState: ProductState = {
  value: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProducts: (state, action: PayloadAction<Product[]>) => {
      state.value = action.payload;
    },
  },
});

// selectors
export const selectProducts = (state: RootState) => state.products.value;

// actions
export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;
