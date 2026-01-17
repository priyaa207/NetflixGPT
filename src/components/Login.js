import Header from "./Header"
import { isValidData } from "../utils/Validate"
import { useState,useRef } from "react"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMessage, setErrMessage] = useState(null);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const nameRef = useRef(null);
    const toggleSignIn = () => setIsSignInForm(!isSignInForm);
    const handleButtonClick = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = isSignInForm ? null : confirmPasswordRef.current.value;
        const name = isSignInForm ? "LoginUser" : nameRef.current.value;
        const validationMessage = isValidData(email, password, confirmPassword, name);
        setErrMessage(validationMessage);
    }
  return (
    <div>
        <Header />
        <div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_large.jpg"
            alt="Login Banner" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="absolute my-36 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        flex flex-col bg-black bg-opacity-75 p-8 rounded-md text-white w-3/12">
            <h1 className="text-3xl font-bold mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && 
                <input ref={nameRef} className="p-4 my-3 w-full bg-gray-900 rounded-md border border-gray-500" type="text" placeholder="Full Name" />
            }
            <input ref={emailRef} className="p-4 my-3 w-full bg-gray-900 rounded-md border border-gray-500" type="email" placeholder="Email address" />
            <input ref={passwordRef} className="p-4 my-3 w-full bg-gray-900 rounded-md border border-gray-500" type="password" placeholder="Password" />
            {!isSignInForm && 
                <input ref={confirmPasswordRef} className="p-4 my-3 w-full bg-gray-900 rounded-md border border-gray-500" type="password" placeholder="Confirm Password" />
            }
            <p className="text-red-500 font-bold">{errMessage}</p>
            <button className="bg-red-600 text-white font-bold p-2 my-3 w-full rounded-md h-10" onClick={handleButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="my-6" onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? " : "Already have an account? "} 
                <span className="text-blue-500 cursor-pointer">{isSignInForm ? "Sign up now" : "Sign in"}</span>
            </p>
        </form>
    </div>
  )
}

export default Login