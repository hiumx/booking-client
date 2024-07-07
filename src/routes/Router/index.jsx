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
                <Route path="/search-result" element={<SearchResultOverview />} />
                <Route path="/search-result/:id" element={<SearchResultDetail />} />
                <Route path="/book" element={<MyStep />} />
                <Route path="/posts" element={<Post />} />

                <Route path="/system/admin" element={<AdminManagement />} />

                <Route path="/system/hotel-manager" element={<HotelManagement />} />
                <Route path='/system/hotel-manager/hotels' element={<HotelManagementList/>}/>
                <Route path='/system/hotel-manager/hotel-update' element={<HotelManagement_Update/>}/>
                <Route path='/system/hotel-manager/create_hotel' element={<HotelManagement_Create/>}/>
                <Route path='/system/hotel-manager/hotel' element={<RoomManagement/>}/>
                <Route path='/system/hotel-manager/room-update' element={<RoomManagement_Update/>}/>
                <Route path='/system/hotel-manager/create_hotel' element={<HotelManagement_Create/>}/>
                <Route path='/system/hotel-manager/create_room' element={<RoomManagement_Create/>}/>


                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    )
}

export default Routers
