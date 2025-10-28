import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import firebaseConfig from "./components/firebase/firebaseConfig";
import Home from "./Pages/Home";


function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
  },
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
