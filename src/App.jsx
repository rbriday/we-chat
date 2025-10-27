import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";


function App() {

const router = createBrowserRouter([
  {
    path: "/registration",
    element:<Registration></Registration>,
  },
  {
    path: "/login",
    element:<Login></Login>,
  },
  {
    path: "/forgot",
    element:<Forgot></Forgot>,
  },
]);

  return (
  <RouterProvider router={router}></RouterProvider>
  )
}

export default App
