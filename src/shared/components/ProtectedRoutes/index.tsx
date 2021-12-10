import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../utils/helpers/protectedRoutes";

function ProtectedRoute() {
  const isAuth = useAuth();

  if (isAuth) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}

export default ProtectedRoute;
