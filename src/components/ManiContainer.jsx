import React from 'react'
import { useSelector } from 'react-redux'
import  VideoBackground  from './VideoBackground'
import VideoTitle  from './VideoTitle'
import Header from './Header'
export const ManiContainer = () => {
    const movies = useSelector(store => store.movies?.noePlayingMovies)
    if(!movies) return
    const mainMovie = movies[0]
    const {original_title, overview,id} = mainMovie

  return (
    <div>
      <Header/>
       <VideoBackground />
       <VideoTitle title = {original_title} overview= {overview} movieid={id} />
    </div>
  )
}
