import { useDispatch } from "react-redux";
import { resetCount } from "../../store/counterSlice";

const ResetButton = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetCount());
  };
  
  return (
    <button
      className="bg-red-800 px-10 text-white font-bold text-xl rounded hover:bg-red-500 my-4"
      onClick={handleReset}
    >
      Reset
    </button>
  );
};

export default ResetButton;
