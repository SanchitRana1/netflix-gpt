import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute w-screen h-screen -z-10">
        <img
          className="min-h-[100%] min-w-[100%] object-center"
          src={BG_IMG}
          alt="bg-login"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch