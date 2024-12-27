import { createContext } from "react";

const CartContext = createContext({
  showDetails: false,
  toggleShowCartDetails: () => {},
});

export default CartContext;
