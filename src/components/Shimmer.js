import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  const cards = [...Array(24).keys()];
  return (
    <div className="flex gap-5 flex-wrap m-4 justify-center">
      {cards.map((each) => (
        <ShimmerCard key={each} />
      ))}
    </div>
  );
};

export default Shimmer;
