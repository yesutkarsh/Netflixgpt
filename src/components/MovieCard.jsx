import React from 'react'
import { poster } from '../../utils/constant'
export default function MovieCard({posterPath}) {
    // {console.log(movies[0].poster_path)}
  return (

    <div>


    
    <img style={{height:"200px", display:"flex", flexWrap:"nowrap", minWidth:"190px", minHeight:"300px", margin:"10px", borderRadius:"22px"}} src={posterPath} alt="poster" /> 
     
    </div>
  )
}










