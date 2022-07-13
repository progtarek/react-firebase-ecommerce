import { createContext, useState } from "react";

export const CategoriesContext = createContext({
  categories: [],
  setCategories: () => null,
});

export const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories, setCategories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
