const { createContext, useState } = require("react");

const _addItemToCart = (arr, item) => {
  const itemIndex = arr.findIndex((_) => _.id === item.id);
  if (itemIndex !== -1) {
    arr[itemIndex] = {
      ...arr[itemIndex],
      quantity: arr[itemIndex].quantity + 1,
    };
    return [...arr];
  } else {
    return [...arr, { ...item, quantity: 1 }];
  }
};

export const CartContext = createContext({
  isCartDropdownOpen: false,
  setDropdown: () => null,
  cartItems: [],
  addItemToCart: () => null,
});

export const CartContextProvider = ({ children }) => {
  const [isCartDropdownOpen, setDropdown] = useState();
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems(_addItemToCart(cartItems, item));
  };

  const value = { isCartDropdownOpen, setDropdown, cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
