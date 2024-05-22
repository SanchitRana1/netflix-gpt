import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  // fetch Trailer video with custom hook
  const trailerVideo = useSelector((store) => store?.movies?.addTrailerVideo);
  useTrailerVideo(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?si=cyTV9JeXQFpq6DdT&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"    
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
