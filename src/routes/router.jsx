import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import ErrorPage from "../pages/ErrorPage";
import OurShop from "../pages/OurShop";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";
import AllUsers from "../pages/AllUsers";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><OurShop></OurShop></PrivateRoute>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/sign-up",
    element: <SignUp></SignUp>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/my-cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
