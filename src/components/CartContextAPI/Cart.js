import { useState } from "react";
import Header from "./Header";
import Products from "./Products";
import CartDetails from "./CartDetails";
import CartContext from "../../context/CartContext";
import ItemContext from "../../context/ItemContext";

const Cart = () => {
  const [showCartDetails, setShowCartDetails] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const itemCtxValue = {
    items: cartItems,
    addToCart: (product) => {
      setCartItems((items) => [...items, product]);
    },
    clearCart: () => {
      setCartItems([]);
    },
  };
  const ctxValue = {
    showDetails: showCartDetails,
    toggleShowCartDetails: (show) => {
      setShowCartDetails(show);
    },
  };

  return (
    <CartContext.Provider value={ctxValue}>
      <ItemContext.Provider value={itemCtxValue}>
        <div className="">
          <Header />
          {showCartDetails ? <CartDetails /> : <Products />}
        </div>
      </ItemContext.Provider>
    </CartContext.Provider>
  );
};

export default Cart;
