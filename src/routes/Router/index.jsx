import React, { useLayoutEffect } from 'react'

import {
    Route,
    Routes,
    BrowserRouter as Router,
    useLocation,
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
import SearchResultOverview from '~/pages/SearchResult/SearchResultOverview';
import SearchResultDetail from '~/pages/SearchResult/SearchResultDetail';
import Booking from '~/pages/Booking';

const Routers = () => {

    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <div>
            <Routes>
                <Route path="/auth/sign-in" element={<Login />} />
                <Route path="/auth/sign-up" element={<Register />} />
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                <Route path="/auth/reset-password" element={<ResetPassword />} />
                <Route path="/my-settings" exact element={<MySetting />} />
                <Route path="/my-settings/:slug" element={<MySetting />} />
                <Route path="/my-settings/:slug/:id" element={<MySettingDetail />} />
                <Route path="/my-settings/:slug/:id" element={<MySettingDetail />} />
                <Route path="/search-result" element={<SearchResultOverview />} />
                <Route path="/search-result/:id" element={<SearchResultDetail />} />
                <Route path="/book" element={<Booking />} />

                <Route path="/system" element={<UserManagement />} />

                <Route path="/hotel-manager" element={<HotelManagement />} />

                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default Routers
