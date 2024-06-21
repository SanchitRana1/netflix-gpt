import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white pb-4">
      <h1 className="text-lg md:text-3xl font-semibold py-3">{title}</h1>
      <div className="flex hover:overflow-x-scroll no-scrollbar overflow-auto">
        <div className="flex">
          {movies?.map((movie) => (
            <Link  className="mr-4" key={movie?.id} to={"/about?v="+movie?.id}>
            <MovieCard moviePosterPath={movie?.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
