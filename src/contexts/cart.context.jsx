const { createContext, useState } = require("react");

export const CartContext = createContext({
  isCartDropdownOpen: false,
  setDropdown: () => null,
});

export const CartContextProvider = ({ children }) => {
  const [isCartDropdownOpen, setDropdown] = useState();
  const value = { isCartDropdownOpen, setDropdown };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
