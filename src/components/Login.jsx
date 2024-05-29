import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/constants";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [showPassword, setShowPassword] = useState(false);


  //state for error message
  const [errMessage, setErrMessage] = useState(null);

  //toggle signIn and Signup
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  //on click of SignIn or SignUp button click
  const handleButtonClick = () => {
    //Validate form data
    isSignInForm
      ? setErrMessage(
          checkValidData(email.current.value, password.current.value)
        )
      : setErrMessage(
          checkValidData(
            email.current.value,
            password.current.value,
            name.current.value
          )
        );

    //stop here in case of any error messages
    if (errMessage) return;

    // SignUp / SignIn
    if (!isSignInForm) {
      // SignUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          //updating user profile
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { USER_AVATAR },
          })
            .then(() => {
              // Profile updated!
              // getting updated user value
              const { uid, email, displayName, photoURL } = auth.currentUser;
              //dispatching an action to update the redux store
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " | " + errorMessage);
        });
    } else {
      // SignIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " | " + errorMessage);
          console.log(errorMessage);
        });
    }
  };

  const handleToggle = () => {};

  return (
    <div>
      <Header />
      <div className="fixed w-screen h-screen">
        <img
          className="min-h-[100%] min-w-[100%] object-cover"
          src={BG_IMG}
          alt="bg-login"
        />
      </div>
      <form
        className="md:w-[30rem] p-4 md:p-14 absolute my-36 mx-10 md:mx-auto bg-black  right-0 left-0 text-white rounded-md bg-opacity-75"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-2xl py-3 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 border border-gray-400 rounded-md w-full bg-gray-600 bg-opacity-25"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email ID"
          className="p-4 my-2 border border-gray-400 rounded-md w-full bg-gray-600 bg-opacity-25"
        />
        <div className="flex">
          <input
            ref={password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="p-4 my-2 border border-gray-400 rounded-md w-full bg-gray-600 bg-opacity-25 relative w-100"
          />
          <button className="py-4 my-3 absolute right-[15%] w-5" onClick={()=>setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errMessage !== null && (
          <p className="p-2 my-1 font-bold text-red-500 text-lg">
            {errMessage}
          </p>
        )}

        <button
          className="p-2 my-2 bg-red-700  rounded-md w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="p-2 my-2">
            New to Netflix?{" "}
            <span className="font-bold cursor-pointer" onClick={toggleSignIn}>
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="p-2 my-2 ">
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
