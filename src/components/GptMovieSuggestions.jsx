import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovieNames, movieResults } = useSelector((store) => store.gpt);
  // console.log(gptMovieNames);
  if (!gptMovieNames) return null;

  return (
    <div className="p4 m-4 bg-black bg-opacity-90 text-white rounded-md">
      <div className="w-full h-full">
        {/* <h1>{gptMovieNames[0]}</h1> */}
        {gptMovieNames.map((movieName,index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
