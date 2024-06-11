import React from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGO } from '../../utils/constant'
export default function Header() {
const navigate = useNavigate()
  
useEffect(()=>{

  const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
          navigate("/browse")
          const {uid,email, displayName} = user
          dispatch(addUser({uid,email,displayName: "Utkarsh"}))
          
      }else{
        navigate("/")
          dispatch(removeUser())
  
      }
  })
  return ()=> unsubscribe()
  },[])

  

  return (
    <div className='absolute'>
    <img
    className='z-10 w-[250px] px-8 py-8 bg-gradient-to-b from-black' src={LOGO} alt="" />
    </div>
  )
}
