import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutMovie from "./AboutMovie";
import Header from "./Header";

export default function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path: "/about",
      element: <AboutMovie />,
    }
  ]);

  return (
    <div>
      {/* <RouterProvider router={appRouter} /> */}
      <Header/>
      <Outlet/>
    </div>
  );
}
