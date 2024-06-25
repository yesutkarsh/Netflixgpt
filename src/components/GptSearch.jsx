import React from 'react'
import Header from './Header'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

export default function GptSearch() {
  return (
    <>
    <Header/>
    <div>


        <div className='mt-[200px] absolute'>

      <GptSearchBar/>
      <GptMovieSuggestions/>    
        </div>
    
    
    
    
    
    </div>
    </>
  )
}
