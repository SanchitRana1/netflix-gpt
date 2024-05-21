import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import {RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export default function Body() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        //dispatch an action
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
        // navigate("/browse");//navigate to browse page is user is signed in
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/");//navigate to login page is user is signed out
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
