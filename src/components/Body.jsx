import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Signup from './signup'
import Hit from './Hit'

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
            path:"/test",
            element:<Hit/>
        }
    ])

  return (
    <>
    
   <RouterProvider router={appRouter} />
    </>
  )
}
