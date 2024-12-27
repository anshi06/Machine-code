import { useContext } from "react";
import ItemContext from "../../context/ItemContext";
import Product from "./Product";

const CartDetails = () => {
  const { items, clearCart } = useContext(ItemContext);
  
  const handleClearCart = () => {
    clearCart();
  }

  return (
    <div className="flex justify-center m-4">
      <div className="w-full md:w-1/2 text-center bg-blue-200 flex flex-col gap-5 rounded-md">
        <div className="flex justify-center gap-5">
          <p className="font-bold text-xl">Items</p>
          <button className="bg-red-700 text-white font-bold px-2 mt-1 rounded-sm hover:bg-red-800" onClick={handleClearCart}>Clear cart</button>
        </div>

        {items.length === 0 && (
          <p className="font-bold text-red-700"> Cart is Empty!</p>
        )}
        {items.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CartDetails;
