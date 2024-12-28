import HomeButton from "../HomeButton";
import counterStore from "../../store/counterStore";
import { Provider } from "react-redux";
import CounterBody from "./CounterBody";
import ResetButton from "./ResetButton";

const CountdownTimer = () => {
  return (
    <Provider store={counterStore}>
      <div className="flex flex-col items-center">
        <div>
          <HomeButton />
        </div>
        <div className="bg-blue-950 md:w-1/2 text-center m-4 rounded-md shadow-lg shadow-purple-200">
          <p className="font-bold text-yellow-200 text-2xl md:text-3xl my-2">
            Redux Counter
          </p>
          <CounterBody />
          <ResetButton/>
        </div>
      </div>
    </Provider>
  );
};

export default CountdownTimer;
