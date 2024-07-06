import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { addShowTrailerVideoTitle } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  // fetch Trailer video with custom hook
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useTrailerVideo(movieId);
  const dispatch = useDispatch();
  const onMouseOver = () => {
    dispatch(addShowTrailerVideoTitle(false));
  };
  const onMouseLeave = () => {
    dispatch(addShowTrailerVideoTitle(true));
  };

  const showTrailerVideoTitle = useSelector(
    (store) => store?.movies?.showTrailerVideoTitle
  );
  return (
    <div
      className="videoDiv"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?si=cyTV9JeXQFpq6DdT&mute=0&autoplay=" +
          [!showTrailerVideoTitle ? "1" : "0"] +
          "?si=cyTV9JeXQFpq6DdT&modestbranding=1&showinfo=0&controls=0&showinfo=0&loop=0&rel=0&amp"
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
