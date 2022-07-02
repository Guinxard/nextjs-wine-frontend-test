import { createSlice } from '@reduxjs/toolkit';
import { CartProduct } from '../../components/utils';

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
    handleCartProduct: (state: { cart: CartProduct[]; totalPrice: number; }, action: { payload: any; }) => {
  
      const received = action.payload;

      const productExists = state.cart.find((p: { id: number; }) => p.id === received.id);

      if (!productExists) state.cart = [...state.cart, received];

      let updatedCart = state.cart.map((p: { id: number; }) => ((p.id === received.id) ? received : p));

      updatedCart = updatedCart.filter((product: { quantity: number; }) => product.quantity > 0);

      state.cart = [...updatedCart];

      state.totalPrice = calculatePrice(state.cart);

      localStorage.setItem('cart', JSON.stringify({
        cart: state.cart, totalPrice: state.totalPrice }));
    },
    handleNewPage: (state: { totalPrice: number; cart: CartProduct[]; }) => {
      const cartStorage = JSON.parse(localStorage.getItem('cart')|| '');
      state.totalPrice = cartStorage.totalPrice;
      state.cart = cartStorage.cart;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  handleNewPage,
  handleCartProduct,
} = productSlicer.actions;

export default productSlicer.reducer;
