const TopicBadge = ({ name }) => {
  return (
    <div className="bg-yellow-400 text-black rounded-lg font-bold cursor-pointer hover:bg-red-200 text-center overflow-x-auto">
      <h3 className="p-3">{name}</h3>
    </div>
  );
};

export default TopicBadge;
