import Header from "./Header"
import { useState } from "react"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignIn = () => setIsSignInForm(!isSignInForm);
  return (
    <div>
        <Header />
        <div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_large.jpg"
            alt="Login Banner" />
        </div>
        <form className="absolute my-36 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        flex flex-col bg-black bg-opacity-75 p-8 rounded-md text-white w-3/12">
            <h1 className="text-3xl font-bold mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && 
                <input className="p-4 my-3 w-full bg-gray-900 rounded-md border border-gray-500" type="text" placeholder="Full Name" />
            }
            <input  className="p-4 my-3 w-full bg-gray-900 rounded-md border border-gray-500" type="email" placeholder="Email address" />
            <input className="p-4 my-3 w-full bg-gray-900 rounded-md border border-gray-500" type="password" placeholder="Password" />
            {!isSignInForm && 
                <input className="p-4 my-3 w-full bg-gray-900 rounded-md border border-gray-500" type="password" placeholder="Confirm Password" />
            }
            <button className="bg-red-600 text-white font-bold p-2 my-3 w-full rounded-md h-10">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="my-6" onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? " : "Already have an account? "} 
                <span className="text-blue-500 cursor-pointer">{isSignInForm ? "Sign up now" : "Sign in"}</span>
            </p>
        </form>
    </div>
  )
}

export default Login