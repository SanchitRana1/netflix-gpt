import React from "react";
import { MOVIE_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ moviePosterPath }) => {
  if (!moviePosterPath) return;
  return (
    <div className="w-36 h-full md:w-40">
      <img className="object-fill" src={MOVIE_IMG_CDN_URL + moviePosterPath} alt="img_url" />
    </div>
  );
};

export default MovieCard;
