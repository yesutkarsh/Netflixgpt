import React, { useEffect } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../utils/userSlice';
import { addNowPlayingMovies } from '../../utils/movieSlice';
import { ManiContainer } from './ManiContainer';
import { SecondryContainer } from './SecondryContainer';
import GptSearch from './GptSearch';
export default function Browse() {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const  showGptSearch  = useSelector(store => store?.gpt?.showGptSearch)



  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser()); // Dispatch action to remove user from Redux store
        navigate('/');
      })
      .catch((error) => {
        // Handle sign-out error
        console.error('Sign-out error:', error);
        navigate('/error');
      });
  };

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
    dispatch(addNowPlayingMovies(movies))
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <>

      {/* <Header /> */}
      <div>
        {showGptSearch?<GptSearch/>:<>
      <ManiContainer/>
      <SecondryContainer/>
        </>}
      </div>
    
    </>
  );
}
