import HomeButton from "./HomeButton";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { GIFS_TRENDING_API } from "../utils/constants";
import GifCard from "./GifCard";

const InfiniteScroll = () => {
  const [showShimmer, setShowShimmer] = useState(true);
  const [gifs, setGifs] = useState([]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      fetchGifsData();
    }
    
  };

  const fetchGifsData = async () => {
    setShowShimmer(true);
    const data = await fetch(GIFS_TRENDING_API);
    const json = await data.json();
    setGifs((gifs) => [...gifs, ...json.data]);
    setShowShimmer(false);
  };

  useEffect(() => {
    fetchGifsData();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex gap-2 flex-wrap justify-center bg-blue-950">
      <HomeButton />
      <div className="flex gap-5 flex-wrap m-4 justify-center">
        {gifs.length &&
          gifs.map((gif, index) => <GifCard key={index} url={gif.embed_url} />)}
      </div>
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default InfiniteScroll;
