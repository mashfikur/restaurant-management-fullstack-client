import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import ErrorPage from "../pages/ErrorPage";
import OurShop from "../pages/OurShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <Menu></Menu>,
      },
      {
        path: "/our-shop",
        element: <OurShop></OurShop>,
      },
    ],
  },
]);

export default router;
