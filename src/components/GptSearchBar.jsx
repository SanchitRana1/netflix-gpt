import React, { useRef } from "react";
import lang from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_GET_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const currentLanguage = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const dispatch = useDispatch()

  //fetch response on click of GPT search button
  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value+ ". Only give me 10 movies names, comma seperated. e.g. Results: Gadar, Don, Sholay, Golmaal, Koi Mil Gya..";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });//get result for the provided GPT search query
    const gptMovies = gptResults?.choices?.[0]?.message?.content.split(", ");//split the result string into an array of movie names
    console.log(gptMovies);

    const moviePromiseArray = gptMovies.map(movie=>searchMovieTMDB(movie));//fetch info for each movie from TMDB API
    const tmdbResults = await Promise.all(moviePromiseArray);//resolve all promises from the TMDB movie search call
    // console.log(tmdbResults);
    dispatch(addGptMovieResult({gptMovieNames:gptMovies, movieResults:tmdbResults}));//dispatch action to update store with the gpt movie names and tmdb movie results
  };

  //search Movie info in TMDB
  const searchMovieTMDB=async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie, API_GET_OPTIONS) 
    const json = await data.json();
    return json.results;
  }

  return (
    <div className="pt-[40%] md:pt-[20%] flex justify-center ">
      <form
        action=""
        className="w-full md:w-1/2 bg-black bg-opacity-75 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 md:p-4 m-4 col-span-9 rounded-sm"
          type="text"
          placeholder={lang[currentLanguage]?.gptSearchPlaceholder}
        />
        <button
          className="py-2 px-2 md:px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[currentLanguage]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
