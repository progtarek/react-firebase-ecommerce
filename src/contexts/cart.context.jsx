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

const _incrementItemQuantity = (arr, id, quantity = 1) => {
  const itemIndex = arr.findIndex((_) => _.id === id);
  if (itemIndex !== -1) {
    arr[itemIndex] = {
      ...arr[itemIndex],
      quantity: arr[itemIndex].quantity + quantity,
    };
    return [...arr];
  } else {
    return [...arr];
  }
};

const _decrementItemQuantity = (arr, id, quantity = 1) => {
  const itemIndex = arr.findIndex((_) => _.id === id);
  if (itemIndex !== -1) {
    const finalQuantity = arr[itemIndex].quantity - quantity;
    if (finalQuantity === 0) {
      arr.splice(itemIndex, 1);
    } else {
      arr[itemIndex] = {
        ...arr[itemIndex],
        quantity: arr[itemIndex].quantity - quantity,
      };
    }
    return [...arr];
  } else {
    return [...arr];
  }
};

const _removeItem = (arr, id) => {
  const itemIndex = arr.findIndex((_) => _.id === id);
  if (itemIndex !== -1) {
    arr.splice(itemIndex, 1);
    return [...arr];
  } else {
    return [...arr];
  }
};

export const CartContext = createContext({
  isCartDropdownOpen: false,
  setDropdown: () => null,
  cartItems: [],
  addItemToCart: () => null,
  incrementItemQuantity: () => null,
  decrementItemQuantity: () => null,
  removeItem: () => null,
});

export const CartContextProvider = ({ children }) => {
  const [isCartDropdownOpen, setDropdown] = useState();
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems(_addItemToCart(cartItems, item));
  };

  const incrementItemQuantity = (id) => {
    setCartItems(_incrementItemQuantity(cartItems, id));
  };

  const decrementItemQuantity = (id) => {
    setCartItems(_decrementItemQuantity(cartItems, id));
  };

  const removeItem = (id) => {
    setCartItems(_removeItem(cartItems, id));
  };

  const value = {
    isCartDropdownOpen,
    setDropdown,
    cartItems,
    addItemToCart,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
