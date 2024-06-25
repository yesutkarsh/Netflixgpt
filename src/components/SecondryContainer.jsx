import React from 'react'
import MovieListComponent from './MovieListComponent'
import { useSelector } from 'react-redux'

export const SecondryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (



    <>
    
    {/* <div className='-mt-[100px]'> */}

    <MovieListComponent title="Now Playing" movies={movies.noePlayingMovies} />



    {/* </div> */}



    </>
  
  
  
  )
}
