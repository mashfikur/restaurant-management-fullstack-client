import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import SharedInfo from "./context/SharedInfo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SharedInfo>
      <RouterProvider router={router}></RouterProvider>
    </SharedInfo>
  </React.StrictMode>
);
