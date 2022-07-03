import { Product } from "./types";

 
export const fetchProducts = async(requestOptions:RequestInit) => {
  const response = await fetch
  ("https://wine-back-test.herokuapp.com/products", requestOptions);
  const data = await response.json();
  const products = data.items;
  return products
}