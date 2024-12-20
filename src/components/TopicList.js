import { TOPICS } from "../utils/constants";
import TopicBadge from "./TopicBadge";

const TopicList = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 items-center m-3 w-5/6 z-10">
        {TOPICS.map((topic) => (
          <TopicBadge key={topic} name={topic} />
        ))}
      </div>
    </div>
  );
};

export default TopicList;
