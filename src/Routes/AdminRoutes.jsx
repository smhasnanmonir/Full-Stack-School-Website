import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useUser from "../hooks/useUser";
import { InfinitySpin } from "react-loader-spinner";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [userRole] = useUser();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center align-middle justify-center min-h-screen">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  if (user && userRole[0]?.role == "admin") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
