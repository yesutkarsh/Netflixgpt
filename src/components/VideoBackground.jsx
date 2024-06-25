
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../../utils/movieSlice';

export default function VideoBackground(props) {



    const dispatch = useDispatch()
    const trailer = useSelector(store => store.movies?.movieTrailer)
    const movies = useSelector(store => store.movies?.noePlayingMovies)
    if(!movies) return
    const mainMovieVidId = movies[0]
    const {id} = mainMovieVidId

    const [sound, setSound] = useState(false)
    const soundControl = ()=>{
      setSound(!sound)
    }
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDQzOGQ5NDQ0ZTFiNDVmMzcxZGE4YWFhNzUyMjdlOSIsInN1YiI6IjY2NjU3MGQ5NGUzOTM4NDU2YWU5YzRmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fF0_6nfg-Z693nfK7oCbrO52WqXdHCtPVMEUxrrS1n8'
    }
  };
  
  const getMovieVideo = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", options)
    const json = await data.json()
    const trailer = json.results.filter((video)=> video.type == "Trailer")[1].key

    // console.log(json.results[0].key)
    // console.log(json)
    dispatch(addMovieTrailer(trailer))
  }

  useEffect(()=>{
    getMovieVideo()
  },[])
  return (
    <>
    <div>

    <iframe  className='w-screen aspect-video absolute z-[-1]'
    src={"https://www.youtube.com/embed/"+trailer+"?autoplay=1&loop=1&"+`${!sound? "mute=1" : "mute=0" }`+"&controls=0&modestbranding=0&showinfo"} 
    allow="autoplay; encrypted-media; gyroscope;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

<div className='absolute top-[70%]'>
      <button onClick={soundControl} className='bg-white m-10 w-[200px] h-[50px] rounded-xl opacity-[0.5] text-black hover:opacity-[1]'> {!sound?"Playing [ 🔈No Sound ]":"Playing [ 🔊 With Sound ] "}</button>
      <button className='bg-white m-10 w-[150px] h-[50px] rounded-xl opacity-[0.5]  text-black'>More Info</button>
    </div>
    </div>
    </>
  )
}
