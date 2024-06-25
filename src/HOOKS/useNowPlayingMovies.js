import { addNowPlayingMovies } from "../../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const dispatch = useDispatch();
const useNowPlayingMovies = ()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDQzOGQ5NDQ0ZTFiNDVmMzcxZGE4YWFhNzUyMjdlOSIsInN1YiI6IjY2NjU3MGQ5NGUzOTM4NDU2YWU5YzRmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fF0_6nfg-Z693nfK7oCbrO52WqXdHCtPVMEUxrrS1n8'
        }
      };
      
const getNowPlayingMovies = async () => {
    const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const json = await data.json()
    let movies = json.results
    // console.log(movies)
    dispatch(addNowPlayingMovies(movies))
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []); // Empty dependency array to run effect only once on mount
};


  export default useNowPlayingMovies;