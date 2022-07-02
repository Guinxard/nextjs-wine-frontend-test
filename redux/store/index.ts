import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper'
import productsReducer from '../features/productsSlice';

const products = combineReducers({
  productsReducer,
});

export const wineStore = () =>
 configureStore({
  reducer: products,
});

export const wrapper = createWrapper(wineStore)
