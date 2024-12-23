import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { GIFS_TRENDING_API } from "../utils/constants";
import GifCard from "./GifCard";

const ShimmerUI = () => {
  const [gifs, setGifs] = useState(null);
  const cards = [...Array(24).keys()];

  const fetchGifsData = async () => {
    const data = await fetch(GIFS_TRENDING_API);
    const json = await data.json();
    setGifs(json.data);
  };

  useEffect(() => {
    fetchGifsData();
  }, []);

  return (
    <div className="flex gap-5 flex-wrap m-4 justify-center">
      {gifs?.length
        ? gifs.map((gif) => <GifCard key={gif.id} url={gif.embed_url} />)
        : cards.map((each) => <ShimmerCard key={each} />)}
    </div>
  );
};

export default ShimmerUI;
