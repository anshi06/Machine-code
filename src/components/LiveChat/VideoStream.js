const VideoStream = () => {
  return (
    <iframe
      className="rounded-sm"
      width="1000"
      height="500"
      src="https://www.youtube.com/embed/x4CEt0Gd_Lk?si=MJaaVvste9ExUZ4v"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default VideoStream;
