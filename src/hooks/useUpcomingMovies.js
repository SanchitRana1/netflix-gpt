import React from "react";
import { API_GET_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = async () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    //get movie data for Upcoming movies
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      API_GET_OPTIONS
    );
    const json = await movieData.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(()=>{
    getUpcomingMovies()
  },[])
};

export default useUpcomingMovies;
