import CartContext from "../../context/cartContext";
import HomeButton from "../HomeButton";
import { useContext } from "react";

const Header = () => {
  const cartCtx = useContext(CartContext);
  
  const handleShowCartDetails = () => {
    cartCtx.toggleShowCartDetails(!cartCtx.showDetails)
  }

  return (
    <div className="flex justify-between bg-blue-950">
      <div className="mx-2 md:mx-4">
        <HomeButton />
      </div>

      <div className="text-center">
        <h2 className="md:font-bold text-white py-4 md:py-8 md:text-lg mx-3">
          Cart Behaviour using context API
        </h2>
      </div>

      <div className="bg-yellow-400 my-4 md:m-4 rounded-md hover:bg-yellow-500">
        <button
          className="md:py-4 md:px-3 md:font-bold "
          onClick={handleShowCartDetails}
        >
          Cart-(0)
        </button>
      </div>
    </div>
  );
};
export default Header;
