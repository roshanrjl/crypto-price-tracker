import { createBrowserRouter,} from "react-router-dom";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Layout from "../Layout";
import Coin from "../pages/Coin/Coin";
import Watchlist from "../pages/Watchlist/"; 


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
        path: "/features",
        element: <Features />,
      },
      {
        path: "/coin/:id",
        element: <Coin />,
      },
      {
        path:"watchlist",
        element:<Watchlist />
      }
    ],
  },
]);

export default router;