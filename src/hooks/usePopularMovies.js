import React from "react";
import { API_GET_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = async () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    //get movie data for Popular movies
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_GET_OPTIONS
    );
    const json = await movieData.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(()=>{
    getPopularMovies()
  },[])
};

export default usePopularMovies;
