import HomeButton from "../HomeButton";

const CountdownTimer = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <HomeButton />
      </div>
      <div className="bg-blue-950 md:w-1/2 text-center m-4 rounded-md shadow-lg shadow-purple-200">
        <p className="font-bold text-yellow-200 text-2xl md:text-3xl my-2">
          Redux Counter
        </p>
        <div className="flex justify-center gap-6 m-4 text-center">
          <button className="bg-red-800 px-4 text-white font-bold text-2xl rounded hover:bg-red-500">
            -
          </button>
          <span className="text-white font-bold text-2xl border border-pink-200 px-4 ">
            value
          </span>
          <button className="bg-red-800 px-4 text-white font-bold text-2xl rounded hover:bg-red-500">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
