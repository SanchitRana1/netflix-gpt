import React from 'react'
import lang from '../utils/langConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const currentLanguage = useSelector(store=>store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form action="" className='w-1/2 bg-black bg-opacity-75 grid grid-cols-12'>
            <input className="p-4 m-4 col-span-9 rounded-sm" type="text" placeholder={lang[currentLanguage]?.gptSearchPlaceholder}/>
            <button className='py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg'>{lang[currentLanguage]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar