import React, { useEffect, useState } from "react";
import Header from "./Header";
import { API_GET_OPTIONS } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import InfoContainer from "./InfoContainer";

const AboutMovie = () => {
  const [searchParams] = useSearchParams();

  const [trailer, setTrailer] = useState({});
  const [info, setInfo] = useState({});

  // fetch Trailer video
  const getMovieInfo = async () => {
    const trailerVideo = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        searchParams.get("v") +
        "/videos?language=en-US",
      API_GET_OPTIONS
    ); //fetch movie trailer
    const json = await trailerVideo.json();
    //get Official Trailer video for the movie
    const video = json.results.filter((video) => {
      return (
        video.name.includes("Official" && "Trailer") ||
        video.name.includes("trailer")
      );
    })[0];
    setTrailer(video);

    const movieInfo = await fetch(
      "https://api.themoviedb.org/3/movie/" + searchParams.get("v"),
      API_GET_OPTIONS
    ); //fetch movie info
    const jsonInfo = await movieInfo.json();
    setInfo(jsonInfo);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <div className="flex flex-col md:pt-[8%] pt-[25%] bg-black text-white w-full h-[100%] bg-fixed">
      <div>
        <InfoContainer info={info} />
      </div>

      <div className="flex md:w-[70%] w-full mx-auto mb-4">
        <iframe
          className="w-full aspect-video h-[20%] border-2"
          src={
            "https://www.youtube.com/embed/" +
            trailer?.key +
            "?si=cyTV9JeXQFpq6DdT&modestbranding=1&showinfo=0&mute=0&autoplay=0&controls=0&showinfo=0&loop=0&rel=0&amp"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutMovie;
