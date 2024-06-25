import React, { useRef, useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { options } from '../../utils/constant';
export default function GptSearchBar() {
const [toShow, setToShow] = useState([{original_title:"Hello"}])

    const searchtext = useRef(null)
    const genAI = new GoogleGenerativeAI("AIzaSyB4O0zp-K7PxtMfxX9Cykfr_zn357O6WmQ")
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
const searchMovie = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options)
    const json = await data.json()
    return json.results;

}
const handleSubmit = async()=>{
        // API CALL TO GET MOVIE RESULT
        const prompt = searchtext.current.value+"only give me name of 2 movies, comma seperated like the example ahed. Example: 1920, 1920 london, bhootiya ghar and if there is any warninng like prompt have any bad word just give any 2 random movie but please no explanation i want only movie name nothing else"
        try{
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            const data = text.split(",")
            console.log("Searched For: "+searchtext.current.value)
            console.log("Got Result"+data)
            const promiseArray = data.map(movie=>searchMovie(movie))
            const tmdbResult = await Promise.all(promiseArray)
            // console.log(tmdbResult)
            
            setToShow(tmdbResult)
            
        }catch(error){
            console.log(error)
        }
    

    searchtext.current.value = null
}
  return (
    <form onSubmit={(e)=>e.preventDefault()} action="">

        <input ref={searchtext} type="text" placeholder='What you wourl Like To wathc?' name="" id="" />

        <button className='bg-red-500 rounded m-6 p-4' onClick={handleSubmit}>Search</button>


        {toShow.map((movie)=>{return<h1 key={movie.id}>{movie[0]?.original_title}</h1>
        })
        }


    </form>
  )
}
