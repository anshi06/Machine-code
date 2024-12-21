import HomeBody from "./HomeBody";
import TopicList from "./TopicList";

const HomePage = () => {
  return (
    <div className="bg-blue-950 md:h-screen bg-opacity-90">
      <HomeBody />
      <TopicList/>
    </div>
  );
};

export default HomePage;
