import { Routes, Route, Navigate } from "react-router-dom";
import Confidential from "../../../containers/Confidential";
import About from "../../../containers/About";
import Login from "../../../containers/Login";
import ProtectedRoutes from "../ProtectedRoutes";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/confidential" element={<Confidential />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
