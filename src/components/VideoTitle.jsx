import React from 'react'

const VideoTitle = ({title,id,overview}) => {

    
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-6 w-1/2 text-md'>{overview}</p>
    <div className='mx-10'>
        <button className='text-black font-bold hover:opacity-80 bg-white py-2 px-6 m-1 rounded-md' >
      ▷ Play</button>
        <button className='bg-gray-500 font-bold text-white py-2 px-6 m-1 bg-opacity-70 rounded-md size-max'>ⓘ More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle