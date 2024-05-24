import React from "react";
import { API_GET_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = async () => {
  const dispatch = useDispatch();

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
    getTopRatedMovies()
  },[])
};

export default useTopRatedMovies;
