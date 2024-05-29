import React from "react";
import { MOVIE_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ moviePosterPath }) => {
  if (!moviePosterPath) return;
  return (
    <div className="w-36 md:w-40 pr-1 mr-4">
      <img src={MOVIE_IMG_CDN_URL + moviePosterPath} alt="img_url" />
    </div>
  );
};

export default MovieCard;
