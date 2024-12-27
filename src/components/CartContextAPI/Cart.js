import { useState } from "react";
import Header from "./Header";
import Products from "./Products";
import CartDetails from "./CartDetails";
import CartContext from "../../context/cartContext";

const Cart = () => {
  const [showCartDetails, setShowCartDetails] = useState(false);
  const ctxValue = {
    showDetails: showCartDetails,
    toggleShowCartDetails: (show) => {
        setShowCartDetails(show);
    },
  };

  return (
    <CartContext.Provider value={ctxValue}>
      <div className="">
        <Header />
        {showCartDetails ? <CartDetails /> : <Products />}
      </div>
    </CartContext.Provider>
  );
};

export default Cart;
