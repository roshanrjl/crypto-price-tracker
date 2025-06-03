import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import {  RouterProvider } from "react-router-dom";
import store from "./redux/store";
import router from "./Routes/Route"; // Import the router configuration



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* ✅ Redux store is provided here */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
