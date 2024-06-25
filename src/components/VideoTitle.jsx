import React from 'react'

export default function VideoTitle(props) {
  return (
    < >
    <div className='text-white bg-gradient-to-r from-black w-screen aspect-video overflow-hidden'>
<div className='pt-[10%]'>

    <h1 className='text-[50px] p-10' >{props.title}</h1>
    <p className='w-[600px] p-10'>{props.overview}</p>

</div>


    </div>
    </>
  )
}
