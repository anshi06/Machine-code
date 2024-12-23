const GifCard = ({ url }) => {
  return (
    <div className="w-40 md:w-56 h-48 md:h-60 rounded-lg bg-black">
      <iframe
        className="w-full h-full object-cover"
        src={url}
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GifCard;
