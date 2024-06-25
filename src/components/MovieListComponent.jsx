import React from 'react'
import MovieCard from './MovieCard'
import { poster } from '../../utils/constant'
export default function MovieListComponent({title, movies}) {
  return (
    <div>
      <div className=''>
    <h1>{title}</h1>
      </div>
      <div  className='flex flex-nowrap overflow-x-scroll'>
        {movies?.map((movie)=>{return <MovieCard key={movie?.id} posterPath= {poster+movie.poster_path}/>})}
      </div>
    </div>
  )
}
