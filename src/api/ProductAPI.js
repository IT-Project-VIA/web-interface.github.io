import { products } from "../data/products";

let actualProducts = undefined;

export const ProductAPI = {
  getProducts: () => actualProducts ?? [...products],
  putProducts: (newProducts) => {
    actualProducts = newProducts;
  },
};
