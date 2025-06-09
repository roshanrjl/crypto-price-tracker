import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout";
import Coin from "../pages/Coin/Coin";
import Watchlist from "../pages/Watchlist/"; 
import ProtectedRoute from "./ProtectedRoute";
import Login from "../component/Login"
import Signup from "../component/Signup";
import Noaccess from "../component/Noacces"
import Trending from "../pages/Trending";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "treding",
        element: <Trending />,
      },
      {
        path: "coin/:id",
        element: <Coin />,
      },
      {
        path: "watchlist",
        element: (
          <ProtectedRoute>
            <Watchlist />
          </ProtectedRoute>
        ),
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"signup",
        element:<Signup />
      },
      {
        path:"onaccess",
        element:<Noaccess />
      }
    ],
  },
]);

export default router;
