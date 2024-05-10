import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img
          className="min-h-[100%] min-w-[100%] object-center"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/1ac1cee7-5580-4cfa-b701-99d1a8f2d148/IN-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ebbef551-d229-4865-8cdc-fb00f8960227_large.jpg"
          alt="bg-login"
        />
      </div>
      <form className="w-[30rem] p-14 absolute my-36 mx-auto bg-black  right-0 left-0 text-white rounded-md bg-opacity-75">
        <h1 className="text-2xl py-3 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 border border-gray-400 rounded-md w-full bg-gray-600 bg-opacity-25"
          />
        )}
        <input
          type="text"
          placeholder="Email or Mobile Number"
          className="p-4 my-2 border border-gray-400 rounded-md w-full bg-gray-600 bg-opacity-25"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 border border-gray-400 rounded-md w-full bg-gray-600 bg-opacity-25"
        />
        <button className="p-2 my-2 bg-red-700  rounded-md w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="p-2 my-2 text-white">
            New to Netflix?{" "}
            <span className="font-bold cursor-pointer" onClick={toggleSignIn}>
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="p-2 my-2 text-white">
            Already a member?{" "}
            <span className="font-bold cursor-pointer" onClick={toggleSignIn}>
              Sign in.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
