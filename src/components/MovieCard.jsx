import React from 'react'
import { MOVIE_IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {

  return (
    <div className='w-40 pr-1 mr-4'>
        <img src={MOVIE_IMG_CDN_URL+movie?.poster_path} alt="img_url" />
    </div>
  )
}

export default MovieCard