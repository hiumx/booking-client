import React from 'react'

import {
    Route,
    Routes,
    BrowserRouter as Router,
    useLocation,
} from "react-router-dom";

import ForgotPassword from "~/pages/Auth/ForgotPassword";
import Login from "~/pages/Auth/Login";
import Register from "~/pages/Auth/Register";
import ResetPassword from "~/pages/Auth/ResetPassword";
import Home from "~/pages/Home";
import MySetting from "~/pages/UserSetting/MySetting";
import MySettingDetail from "~/pages/UserSetting/MySettingDetail";
import HotelManagement from "~/pages/System/HotelManagement";
import SearchResultOverview from '~/pages/SearchResult/SearchResultOverview';
import SearchResultDetail from '~/pages/SearchResult/SearchResultDetail';
import Booking from '~/pages/Booking';
import GoToTop from '~/components/GoToTop';
import MyStep from '~/components/MyStep';
import AdminManagement from '~/pages/System/AdminManagement';
import UserManagement from '~/pages/System/AdminManagement/pages/UserManagement';
import Post from '~/pages/Post';
import HotelManage from '~/pages/System/HotelManagement/pages/HotelManage';
import HotelCreate from '~/pages/System/HotelManagement/pages/HotelCreate';
import RoomManage from '~/pages/System/HotelManagement/pages/RoomManage';
import BookingManage from '~/pages/System/HotelManagement/pages/BookingManage';
import PostManage from '~/pages/System/HotelManagement/pages/PostManage';
import UserBooking from '~/pages/UserSetting/UserBooking';
import PaymentCallBack from '~/pages/PaymentCallBack';
import UserSaveHotel from '~/pages/UserSetting/UserSaveHotel';

const Routers = () => {
    return (
        <div>
            <GoToTop />
            <Routes>
                <Route path="/auth/sign-in" element={<Login />} />
                <Route path="/auth/sign-up" element={<Register />} />
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                <Route path="/auth/reset-password" element={<ResetPassword />} />

                <Route path="/my-settings" exact element={<MySetting />} />
                <Route path="/my-settings/:slug" element={<MySetting />} />
                <Route path="/my-settings/:slug/:id" element={<MySettingDetail />} />
                <Route path="/my-settings/:slug/:id" element={<MySettingDetail />} />
                <Route path="/my-settings/bookings" element={<UserBooking />} />

                <Route path="/my-wish-list" element={<UserSaveHotel />} />

                <Route path="/search-result" element={<SearchResultOverview />} />
                <Route path="/search-result/:id" element={<SearchResultDetail />} />
                <Route path="/book" element={<Booking />} />
                <Route path="/posts" element={<Post />} />

                <Route path="/payment/vn-pay-call-back" element={<PaymentCallBack />} />

                <Route path="/system/admin" element={<AdminManagement />} />
                <Route path="/system/admin/users" element={<UserManagement />} />

                <Route path="/system/hotel-manager" element={<HotelManagement />} />
                <Route path="/system/hotel-manager/hotels" element={<HotelManage />} />
                <Route path="/system/hotel-manager/hotels/create" element={<HotelCreate />} />
                <Route path="/system/hotel-manager/rooms" element={<RoomManage />} />
                <Route path="/system/hotel-manager/bookings" element={<BookingManage />} />
                <Route path="/system/hotel-manager/posts" element={<PostManage />} />

                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    )
}

export default Routers
