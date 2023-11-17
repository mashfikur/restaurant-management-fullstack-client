import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import SharedInfo from "./context/SharedInfo.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Authentication/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <SharedInfo>
          <RouterProvider router={router}></RouterProvider>
          <Toaster></Toaster>
        </SharedInfo>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
