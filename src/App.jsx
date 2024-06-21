import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Browse from "./components/Browse";
import AboutMovie from "./components/AboutMovie";

function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
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
      ]
    }
  ])

  return (
    <div>
      <Provider store={appStore}>
      <RouterProvider router={appRouter}/>
      </Provider>
        
    </div>
  );
}

export default App;
