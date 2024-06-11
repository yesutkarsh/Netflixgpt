import React, { useState } from "react";
import { useRef } from "react";
import Header from "./Header";
import { validateForm } from "../../utils/validate";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
export default function Login() {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState(null)
  
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick =  ()=>{
        const msg = validateForm(email.current.value, password.current.value)
        console.log(msg)
        setErrorMsg(msg)
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")

    // ...
  })
  .catch((error) => {
    console.log(error)
    const errorCode = error.code;
    const errorMessage = error.message;
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
                  <span onClick={handleButtonClick}>Sign In</span> 
                </button>
              </div>            
            <p className="text-white m-5">{errorMsg}</p>
            <p className="text-white m-5"><a href="/signup">New to Netflix | Sign Up</a></p>
            
          </form>
        </div>
      </div>
    </>
  );
}


// 2 :: 8