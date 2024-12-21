import { Link } from "react-router-dom";

const TopicBadge = ({ name }) => {
  return (
    <div className="bg-yellow-400 text-black rounded-lg font-bold cursor-pointer hover:bg-red-200 text-center overflow-x-auto">
      <Link to={name}><h3 className="p-3">{name}</h3></Link>
    </div>
  );
};

export default TopicBadge;
