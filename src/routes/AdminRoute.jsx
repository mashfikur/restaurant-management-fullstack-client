import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import useCheckAdmin from "../hooks/useCheckAdmin";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminPending] = useCheckAdmin();
  const navigate = useNavigate();
  const location = useLocation();

  if (loading || isAdminPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  toast.error("You don't have access to proceed");

  navigate("/login", { state: { from: location }, replace: true });

  return null;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
