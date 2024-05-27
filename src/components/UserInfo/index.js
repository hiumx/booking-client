import React from 'react';
import "./_user_info.scss";

import userImg from "~/assets/images/user.png";
import { Link, useNavigate } from 'react-router-dom';
import { HeartIcon, SignOutIcon, TripIcon, UserIcon, WalletIcon } from '../Icons';
import { useDispatch, useSelector } from 'react-redux';
import { getMyInfo } from '~/store/actions/user.action';
import { signOut } from '~/services/access.service';

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
            if(res.code === 1000) {
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
            <img className='header__user__img' src={userImg} alt='user-image' />
            <div className='header__user__name'>
                <h6>{name}</h6>
                <p>Genius Level 1</p>
            </div>
            <div className='header__user__desc'>
                <ul className='header__user__desc__list'>
                    <li className='header__user__desc__item'>
                        <Link
                            className='header__user__item__link'
                            to="/mysettings"
                        >
                            <UserIcon />
                            <span>Manage account</span>
                        </Link>
                    </li>
                    <li className='header__user__desc__item'>
                        <Link
                            className='header__user__item__link'
                            to=""
                        >
                            <TripIcon />
                            <span>Bookings & Trips</span>
                        </Link>
                    </li>
                    <li className='header__user__desc__item'>
                        <Link
                            className='header__user__item__link'
                            to=""
                        >
                            <WalletIcon />
                            <span>Rewards & Wallet</span>
                        </Link>
                    </li>
                    <li className='header__user__desc__item'>
                        <Link
                            className='header__user__item__link'
                            to=""
                        >
                            <HeartIcon />
                            <span>Saved</span>
                        </Link>
                    </li>
                    <li className='header__user__desc__item'>
                        <div
                            className='header__user__item__link'
                            onClick={handleLogout}
                        >
                            <SignOutIcon />
                            <span>Sign out</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserInfo
