import React from 'react';
import "./_user_info.scss";

import userImg from "~/assets/images/user.png";
import { useNavigate } from 'react-router-dom';
import { HeartIcon, SignOutIcon, TripIcon, UserIcon, WalletIcon } from '../Icons';
import { useDispatch, useSelector } from 'react-redux';
import { getMyInfo } from '~/store/actions/user.action';
import { signOut } from '~/services/auth.service';
import MenuItem from './components/MenuItem';

const UserInfo = () => {

    const dispatch = useDispatch();
    const navigator = useNavigate("");

    const user = useSelector(state => state.user.userMyInfo);

    const name = user?.email ? user.email.split("@")[0] : "Your account";

    const handleLogout = () => {
        const data = {
            token: localStorage.getItem("token")
        }

        signOut(data).then(res => {
            if (res.code === 1000) {
                localStorage.removeItem("token");
                dispatch(getMyInfo());
                navigator("/");
            }
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='header__user__info'>
            <img className='header__user__img' src={userImg} alt='user-img' />
            <div className='header__user__name'>
                <h6>{name}</h6>
                <p>Genius Level 1</p>
            </div>
            <div className='header__user__desc'>
                <ul className='header__user__desc__list'>
                    <MenuItem
                        to='/my-settings'
                        title='Manage account'
                    >
                        <UserIcon />
                    </MenuItem>
                    <MenuItem
                        to='/my-settings/bookings'
                        title='Bookings & Trips'
                    >
                        <TripIcon />
                    </MenuItem>
                    {/* <MenuItem
                        to='#'
                        title="Rewards & Wallet"
                    >
                        <WalletIcon />
                    </MenuItem> */}
                    <MenuItem
                        to='/my-wish-list'
                        title="Saved"
                    >
                        <HeartIcon />
                    </MenuItem>
                    <MenuItem
                        to='#'
                        title="Sign out"
                        onClick={handleLogout}
                        Tag='div'
                    >
                        <SignOutIcon />
                    </MenuItem>
                </ul>
            </div>
        </div>
    )
}

export default UserInfo
