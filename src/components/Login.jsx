import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

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
            photoURL:
              "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
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

              navigate("/browse"); //navigate to browse page is user is signed op
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
          navigate("/browse"); //navigate to browse page is user is signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " | " + errorMessage);
          console.log(errorMessage);
        });
    }
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
      <form
        className="w-[30rem] p-14 absolute my-36 mx-auto bg-black  right-0 left-0 text-white rounded-md bg-opacity-75"
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
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 border border-gray-400 rounded-md w-full bg-gray-600 bg-opacity-25"
        />
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
