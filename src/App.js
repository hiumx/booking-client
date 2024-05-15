import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import "~/styles/index.scss";
import { lazy } from "react";
import ForgotPassword from "./pages/ForgotPassword";

const Login  = lazy(() => import('~/pages/Login'));
const Register  = lazy(() => import('~/pages/Register'));
// const ForgotPassword  = lazy(() => import('~/pages/ForgotPassword'));
const ResetPassword  = lazy(() => import('~/pages/ResetPassword'));

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
