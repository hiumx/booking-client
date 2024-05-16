import React from 'react';
import "./_user_info.scss";

import userImg from "~/assets/images/user.png";
import { Link } from 'react-router-dom';
import { HeartIcon, SignOutIcon, TripIcon, UserIcon, WalletIcon } from '../Icons';

const UserInfo = () => {
    return (
        <div className='header__user__info'>
            <img className='header__user__img' src={userImg} alt='user-image' />
            <div className='header__user__name'>
                <h6>Your account</h6>
                <p>Genius Level 1</p>
            </div>
            <div className='header__user__desc'>
                <ul className='header__user__desc__list'>
                    <li className='header__user__desc__item'>
                        <Link
                            className='header__user__item__link'
                            to="/my-settings"
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
                        <Link
                            className='header__user__item__link'
                            to=""
                        >
                            <SignOutIcon />
                            <span>Sign out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserInfo
