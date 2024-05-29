import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addShowTrailerVideoTitle } from "../utils/movieSlice";

const VideoTitle = ({ title, id, overview }) => {
  
  const showTrailerVideoTitle = useSelector(store=>store?.movies?.showTrailerVideoTitle);
  const dispatch = useDispatch()
  //dispatch action to update store
  const onPlay=()=>{
    dispatch(addShowTrailerVideoTitle(false))
  }
  if(!showTrailerVideoTitle) return;
  return (
    <div className="w-full aspect-video pt-[20%] md:pt-[8rem] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 md:py-2 w-1/2 text-sm h-[10rem]">{overview}</p>
      <div className="my-2 md:mx-10 md:0">
        <button className="text-black font-bold hover:opacity-80 bg-white px-3 py-1 md:py-2 md:px-6 m-1 rounded-md hover:visible" onClick={onPlay}>
          ▷ Play
        </button>
        <button className="bg-gray-500 font-bold text-white py-2 px-6 m-1 bg-opacity-90 hover:bg-gray-700 hover:bg-opacity-70 rounded-md size-max hidden md:inline-block">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
