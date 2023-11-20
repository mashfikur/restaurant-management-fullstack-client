import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }


  if(user){
    return children
  }

  return <Navigate to="/login" state={{from:location}} replace ></Navigate>
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
