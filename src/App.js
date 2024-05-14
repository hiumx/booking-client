import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import "~/styles/index.scss";
import { lazy } from "react";

const Login  = lazy(() => import('~/pages/Login'));
const Register  = lazy(() => import('~/pages/Register'));

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
