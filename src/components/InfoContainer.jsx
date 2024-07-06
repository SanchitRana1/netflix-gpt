import React from "react";
import MovieCard from "./MovieCard";

const InfoContainer = ({ info }) => {
  const {
    title,
    original_title,
    poster_path,
    release_date,
    genres,
    budget,
    revenue,
    runtime,
    popularity,
    vote_count,
    vote_average,
    overview,
  } = info;
  return (
    <div className="m-2 p-2 flex flex-col md:flex-row w-[90%] mx-auto bg-white bg-opacity-5 mb-4 rounded-lg">
      <div className="md:m-4 h-full border-4 rounded-md max-w-fit mx-auto">
        <MovieCard moviePosterPath={poster_path} />
      </div>
      <div className="flex w-full flex-col md:flex-row md:justify-between mx-5 ">
        <div className="md:w-[45%] w-[100%]">
          <div className="m-3 md:my-2">
            <span className="font-bold">Name : </span>
            <span>{original_title ? original_title : title}</span>
          </div>
          <div className="m-3 md:my-2">
            <span className="font-bold">Description : </span>
            <span>{overview}</span>
          </div>
          <div className="m-3 md:my-2">
            <span className="font-bold">Runtime : </span>
            <span>{runtime} mins</span>
          </div>
          <div className="m-3 md:my-2">
            <span className="font-bold">Popularity : </span>
            <span>{popularity}</span>
          </div>
          <div className="m-3 md:my-2">
            <span className="font-bold">Geners : </span>
            {genres &&
              genres.map((g, index) => <span key={index}>{g.name} | </span>)}
          </div>
        </div>
        <div className="md:w-[45%] w-[100%]">
          <div className="m-3 md:my-2">
            <span className="font-bold">Release Date : </span>
            <span>{release_date}</span>
          </div>
          <div className="m-3 md:my-2">
            <span className="font-bold">Budget : </span>
            <span>{budget}</span>
          </div>
          <div className="m-3 md:my-2">
            <span className="font-bold">Revenue : </span>
            <span>{revenue}</span>
          </div>
          <div className="m-3 md:my-2">
            <span className="font-bold">Vote Count : </span>
            <span>{vote_count}</span>
          </div>
          <div className="m-3 md:my-2">
            <span className="font-bold">Average Votes : </span>
            <span>{vote_average}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
