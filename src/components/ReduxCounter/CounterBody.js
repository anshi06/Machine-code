import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount } from "../../store/counterSlice";

const CounterBody = () => {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrementCount());
  };

  const handleIncrement = () => {
    dispatch(incrementCount());
  };

  return (
    <div className="flex justify-center gap-6 m-4 text-center">
      <button
        className="bg-red-800 px-4 text-white font-bold text-2xl rounded hover:bg-red-500"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="text-white font-bold text-2xl border border-pink-200 px-4 ">
        {counter.value}
      </span>
      <button
        className="bg-red-800 px-4 text-white font-bold text-2xl rounded hover:bg-red-500"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default CounterBody;
