import React, { useState } from "react";
import { useRef } from "react";
import Header from "./Header";
import { validateForm } from "../../utils/validate";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
// Firebase Logic
import { createUserWithEmailAndPassword } from "firebase/auth";



export default function Signup() {
  const [errorMsg, setErrorMsg] = useState(null)
  
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = async ()=>{
        const msg = validateForm(email.current.value, password.current.value)
        console.log(msg)
        setErrorMsg(msg)


        if(msg) return
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });






      } 
  return (
    <>
      <div>
        <Header />

        <img
          className="absolute z-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />

        <div className="">
          <form onSubmit={(e)=>{e.preventDefault()}}
            className="w-3/5 m-12 p-12 bg-black absolute mt-[20%] ml-[50%] translate-x-[-50%] translate-y-[-50%]"
            action=""
          >
            
              // Login Form
              <div>
                <input ref={email} type="email" placeholder="email" className="p-2 m-2" />
                <input
                ref={password}
                  type="password"
                  placeholder="password"
                  className="p-2 m-2"
                />
                <button className="p-4 m-4 bg-white" type="submit">
                  <span onClick={handleButtonClick}>Sign Up</span> 
                </button>
              </div>            
            <p className="text-white m-5">{errorMsg}</p>
            <p className="text-white m-5"><a href="/">Already have Netflix Accoutn | Sign In</a></p>
            
          </form>
        </div>
      </div>
    </>
  );
}


// 2 :: 8