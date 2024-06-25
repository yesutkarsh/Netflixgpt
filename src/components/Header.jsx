import React from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGO } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import { addUser } from '../../utils/userSlice'
import { toggleGptSearchView } from '../../utils/gptSlice'
export default function Header() {
const navigate = useNavigate()
let dispatch = useDispatch()
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
          navigate("/browse")
          const {uid,email, displayName} = user
          dispatch(addUser({uid,email,displayName: "Utkarsh"}))
          
      }else{
          navigate("/login")
          dispatch(removeUser())
  
      }
  })
  return ()=> unsubscribe()
  },[])

  const handleGptSearch = ()=>{
    dispatch(toggleGptSearchView())
  }

  return (
    <div className='absolute flex'>
    <img
    className='z-10 w-[200px] px-8 py-8 bg-gradient-to-r from-black' src={LOGO} alt="" />
    <button onClick={handleGptSearch} className='text-white bg-slate-700 rounded-md m-1 p-7 h-8'>Search</button>
    </div>
  )
}
