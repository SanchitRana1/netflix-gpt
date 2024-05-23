import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";


const Browse = () => {

  useNowPlayingMovies();//calling custom hook to get now playing movies
  usePopularMovies();//calling custom hook to get Popular movies
  useTopRatedMovies();//calling custom hook to get Popular movies
  useUpcomingMovies();//calling custom hook to get Popular movies
 
  return (
    <div>
      <Header />
      {/* main container
          - videoBackground
          - movie info

          2nd Container
          - Movie list
      */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  ); 
};

export default Browse;
