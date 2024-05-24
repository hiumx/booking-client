import React from 'react'

import {
    Route,
    Routes,
    BrowserRouter as Router,
  } from "react-router-dom";  

import ForgotPassword from "~/pages/Access/ForgotPassword";
import Login from "~/pages/Access/Login";
import Register from "~/pages/Access/Register";
import ResetPassword from "~/pages/Access/ResetPassword";
import Home from "~/pages/Home";
import MySetting from "~/pages/UserSetting/MySetting";
import MySettingDetail from "~/pages/UserSetting/MySettingDetail";
import UserManagement from "~/pages/System/UserManagement";
import HotelManagement from "~/pages/HotelManager/HotelManagement";

const Routers = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/auth/sign-in" element={<Login />}/>
        <Route path="/auth/sign-up" element={<Register />}/>
        <Route path="/auth/forgot-password" element={<ForgotPassword />}/>
        <Route path="/auth/reset-password" element={<ResetPassword />}/>
        <Route path="/mysettings" exact element={<MySetting />} />
        <Route path="/mysettings/:slug" element={<MySetting />} />
        <Route path="/mysettings/:slug/:id" element={<MySettingDetail />} />
        <Route path="/mysettings/:slug/:id" element={<MySettingDetail />} />

        <Route path="/system" element={<UserManagement />} />

        <Route path="/hotel-manager" element={<HotelManagement />} />

        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
    </div>
  )
}

export default Routers
