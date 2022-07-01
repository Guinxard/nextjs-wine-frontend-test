import { Product } from "../utils/types";

export interface CartProduct extends Product {
  quantity: number,
};
