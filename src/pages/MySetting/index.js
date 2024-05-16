import React from 'react'
import "./_my_setting.scss";
import HeaderSub from '~/layout/components/HeaderSub';
import SettingItem from '~/components/SettingItem';
import { PlaneDepartureIcon, SecurityIcon, UserIcon, WalletIcon } from '~/components/Icons';
import IconRadius from '~/components/IconRadius';

const MySetting = () => {
    const id = 1;
    return (
        <>
            <HeaderSub />
            <div className='my__setting__wrapper'>
                <div className='my__setting__title'>
                    <h2>Account settings</h2>
                    <p>Manage your Booking.com experience</p>
                </div>
                <ul className='my__setting__list'>
                    <li className='my__setting__item'>
                        <SettingItem
                            title='Personal details'
                            description="Update your information and find out how it's used."
                            ext='Manage personal details'
                            to={`personal`}
                        >
                            <IconRadius width="50px" height="50px">
                                <UserIcon width='20px' height='20px' fill="#b99e9e" className='setting__icon' />
                            </IconRadius>
                        </SettingItem>
                    </li>
                    <li className='my__setting__item'>
                        <SettingItem
                            title='Security'
                            description="Change your security settings, set up secure authentication or delete your account."
                            ext='Manage account security'
                            to={`security`}
                        >
                            <IconRadius width="50px" height="50px">
                                <SecurityIcon width='20px' height='20px' fill="#b99e9e" className='setting__icon' />
                            </IconRadius>
                        </SettingItem>
                    </li>
                    <li className='my__setting__item'>
                        <SettingItem
                            title='Payment details'
                            description="Securely add or remove payment methods to make it easer when you book."
                            ext='Manage payments details'
                            to={`payment-details`}
                        >
                            <IconRadius width="50px" height="50px">
                                <WalletIcon width='20px' height='20px' fill="#b99e9e" className='setting__icon' />
                            </IconRadius>
                        </SettingItem>
                    </li>
                    <li className='my__setting__item'>
                        <SettingItem
                            title='Other travellers'
                            description="Add or edit information about the people you’re travelling with."
                            ext='Manage travellers'
                            to={`other-travellers`}
                        >
                            <IconRadius width="50px" height="50px">
                                <PlaneDepartureIcon width='20px' height='20px' fill="#b99e9e" className='setting__icon' />
                            </IconRadius>
                        </SettingItem>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MySetting
