import { Link } from "react-router-dom";

const HomeButton = () => {
    return <Link to="/">
    <div className="bg-red-800 text-white rounded text-center shadow-md cursor-pointer my-4 hover:bg-red-700">
      <button className="md:text-xl md:font-bold text-white p-2 md:p-4">Back to Home</button>
    </div>
  </Link>
}

export default HomeButton;