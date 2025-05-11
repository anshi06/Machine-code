import { useEffect, useState } from "react";
import HomeButton from "./HomeButton";
const images = [
  "https://i.pinimg.com/originals/9c/b0/70/9cb070d62dc738a0c3a1a408d68e4af5.jpg",
  "https://m.media-amazon.com/images/I/71RWw4rR6LL.jpg",
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
  "https://m.media-amazon.com/images/I/710GjkD28nL._AC_UF1000,1000_QL80_.jpg",
  "https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg",
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
];
const ImageSlider = () => {
  const [active, setActive] = useState(0);
  //The value of active is stale due to how JavaScript closures work inside useEffect. 
  //When you pass [] as a dependency array, the useEffect callback captures the initial value of active (probably 0) and continues to use that snapshot for the lifetime of the effect.
  
  useEffect(() => {
    let interval = setInterval(() => {
      loadNextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const loadNextImage = () => {
    setActive((active) => (active + 1) % images.length);
  };

  const loadPrevImage = () => {
    setActive((active) => active - 1 < 0 ? images.length - 1 : (active - 1) % images.length);
  };
  return (
    <div className="">
      <div className="flex bg-blue-950 justify-between items-baseline flex-col">
        <div className="mx-auto">
          <HomeButton />
        </div>
        <h1 className="text-yellow-200 mx-auto font-bold text-3xl mb-6">
          Image Slider
        </h1>
      </div>
      <div className="flex justify-center m-10 items-center cursor-pointer">
        <span className="text-5xl" onClick={loadPrevImage}>
          ⬅️
        </span>
        <img
          src={images[active]}
          alt="nature image"
          className="w-80 h-80 border rounded-md"
        />
        <span className="text-5xl" onClick={loadNextImage}>
          ➡️
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
