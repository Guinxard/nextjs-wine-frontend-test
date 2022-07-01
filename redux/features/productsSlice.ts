import { createSlice } from '@reduxjs/toolkit';
import { CartProduct } from '../../components/componentTypes';
import { Product } from '../../utils/types';

const calculatePrice = (productList: CartProduct[]) => productList.reduce(
  (sum, product) => sum + (+product.price * product.quantity), 0,
);

export const productSlicer = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalPrice: 0,
  },
  reducers: {
  },
});

// Action creators are generated for each case reducer function
export const {
} = productSlicer.actions;

export default productSlicer.reducer;
