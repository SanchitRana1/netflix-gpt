import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
        <div className="fixed w-full h-screen -z-10">
          <img
            className="min-h-[100%] min-w-[100%] object-cover"
            src={BG_IMG}
            alt="bg-login"
          />
        </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
