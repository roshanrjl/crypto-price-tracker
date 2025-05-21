import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Layout from "./Layout";
import store from "./redux/store";
import Coin from "./pages/Coin/Coin";

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* ✅ Redux store is provided here */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
