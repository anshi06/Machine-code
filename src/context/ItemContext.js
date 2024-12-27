import { createContext } from "react";

const ItemContext = createContext({
  items: [],
  addToCart: () => {},
  // removeFromCart: () => {},
  clearCart: () => {},
});

export default ItemContext;
