import React, { useEffect } from 'react'
import Browse from './Browse'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Signup from './signup'
import Signin from './signin'
import Login from './signin'
import { addUser, removeUser } from '../../utils/userSlice'
export default function Body() {
    
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },{
            path:"/browse",
            element:<Browse/>
        },{
            path:"/signup",
            element:<Signup/>
        },{
            path:"/login",
            element: <Signin/>
        }
    ])

  return (
    <>
    
   <RouterProvider router={appRouter} />
    </>
  )
}
