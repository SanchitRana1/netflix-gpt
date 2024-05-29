import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = ({ title, movies }) => {
  // console.log(movies)
  return (
    <div className="px-6 text-white">
      <h1 className="text-lg md:text-3xl font-semibold py-3">{title}</h1>
      <div className="flex hover:overflow-x-scroll no-scrollbar overflow-auto">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} moviePosterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
