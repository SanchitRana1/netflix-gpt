import React, { useEffect } from 'react'
import { API_GET_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useTrailerVideo = (movieId) => {
    
  const dispatch = useDispatch();
   // fetch Trailer video
   const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_GET_OPTIONS
    ); //fetch top movie info

    const json = await data.json();
    //get Official Trailer video for the movie
    const trailer = json.results.filter((video) => {
      return video.name === "Official Trailer";
    })[0];

    //dispatch action to add trailer to redux store
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
}

export default useTrailerVideo