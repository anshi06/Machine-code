import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";

const ExternalUrlUI = () => {
  return (
    <div className="flex justify-evenly absolute top-1/3 md:right-1/3 md:left-1/3 gap-2 md:gap-3 bg-blue-950 w-full md:w-1/3 shadow-lg md:rounded-lg">
      <Link
        to="https://docs.google.com/document/d/1XyYuebU9WO-L0QSOMois-NndAJHFzf7KaKBjINZ2Vw8/edit?tab=t.0#heading=h.8v7jn55ysi19"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded text-centercursor-pointer my-4 hover:bg-sky-800">
          <h1 className="text-xl font-bold text-white p-4">Read here 👉</h1>
        </div>
      </Link>
      <HomeButton/>
    </div>
  );
};

export default ExternalUrlUI;
