import React from "react";
import { API_GET_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = async () => {
  const dispatch = useDispatch();

  //getting topRated movies from the store
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  
  const getTopRatedMovies = async () => {
    //get movie data for Top Rated movies
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_GET_OPTIONS
    );
    const json = await movieData.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(()=>{
    !topRatedMovies && getTopRatedMovies()
  },[])
};

export default useTopRatedMovies;
