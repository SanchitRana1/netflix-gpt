import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies); //getting movie data from store
  return (
    <div className=" bg-black">
      {/* 
        movieList - Popular
            - movie cards *n
        movieList - Now Playing
        movieList - Trending
        movieList - Recommended
        movieList - Thriller */}
      <div className="-mt-52 pl-12 relative">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
