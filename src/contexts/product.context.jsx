import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState({
    products: PRODUCTS,
  });
  const value = { products, setProducts };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};