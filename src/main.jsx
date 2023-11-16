import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import SharedInfo from "./context/SharedInfo.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <SharedInfo>
        <RouterProvider router={router}></RouterProvider>
      </SharedInfo>
    </HelmetProvider>
  </React.StrictMode>
);
