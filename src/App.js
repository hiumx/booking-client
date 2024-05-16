import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import "~/styles/index.scss";
import { lazy } from "react";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import MySetting from "./pages/MySetting";

// const Login  = lazy(() => import('~/pages/Login'));
// const Register  = lazy(() => import('~/pages/Register'));
// // const ForgotPassword  = lazy(() => import('~/pages/ForgotPassword'));
// const ResetPassword  = lazy(() => import('~/pages/ResetPassword'));
// const Home = lazy(() => import("~/pages/Home"));

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/sign-in" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="/my-settings" element={<MySetting />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
