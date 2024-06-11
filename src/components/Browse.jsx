import React, { useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../utils/userSlice'
export default function Browse() {

  const user = useSelector(store=> store.user);

  const navigate = useNavigate()
  const handleSignout = ()=>{
     signOut(auth)
     .then(()=>{
       navigate("/")
     })
     .catch((error)=>{
      // Error Messages
      navigate("/error")
     })
  }
  return (
    <>
    <Header/>
    <div>Browse</div>




    <h1>{user?.email}</h1>
    <button className='absolute z-50' onClick={handleSignout}>SignOut</button>
    </>
  )
}


// -22:43