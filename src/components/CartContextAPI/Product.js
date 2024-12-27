import { useContext } from "react";
import ItemContext from "../../context/ItemContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(ItemContext);

  const handleAddItem = (product) => {
    addToCart(product);
  };

  return (
    <div className="flex justify-between mx-20 md:mx-40 bg-gradient-to-t from-pink-100 mb-10">
      <p>{product}</p>
      <button
        className="bg-blue-900 hover:bg-blue-950 text-white p-2 rounded"
        onClick={() => handleAddItem(product)}
      >
        Add+
      </button>
    </div>
  );
};

export default Product;
