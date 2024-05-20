import React from 'react'
import "./_my_setting_detail.scss";
import HeaderSub from '~/layout/components/HeaderSub';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import IconRadius from '~/components/IconRadius';
import { PlaneDepartureIcon, SecurityIcon, UserIcon, WalletIcon } from '~/components/Icons';
import SettingDetailItem from '~/components/SettingDetailItem';

const MySettingDetail = () => {
    const { slug } = useParams();
    console.log(slug);
    return (
        <>
            <HeaderSub />
            <div className='setting__detail__wrapper'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <ul className='setting__detail__list'>
                            <li className={slug === "personal" ? "setting__detail__item setting__detail__item__active" : "setting__detail__item"}>
                                <Link to="/mysettings/personal" className='setting__detail__item__link'>
                                    <IconRadius width="50px" height="50px">
                                        <UserIcon width='20px' height='20px' fill="#57c1cd" />
                                    </IconRadius>
                                    <p className="setting__detail__item__text">Personal details</p>
                                </Link>
                            </li>
                            <li className={slug === "security" ? "setting__detail__item setting__detail__item__active" : "setting__detail__item"}>
                                <Link to="/mysettings/security" className='setting__detail__item__link'>
                                    <IconRadius width="50px" height="50px">
                                        <SecurityIcon width='20px' height='20px' fill="#57c1cd" />
                                    </IconRadius>
                                    <p className="setting__detail__item__text">Security</p>
                                </Link>
                            </li>
                            <li className={slug === "payment-details" ? "setting__detail__item setting__detail__item__active" : "setting__detail__item"}>
                                <Link to="/mysettings/payment-details" className='setting__detail__item__link'>
                                    <IconRadius width="50px" height="50px">
                                        <WalletIcon width='20px' height='20px' fill="#57c1cd" />
                                    </IconRadius>
                                    <p className="setting__detail__item__text">Payment details</p>
                                </Link>
                            </li>
                            <li className={slug ==="other-travellers" ? "setting__detail__item setting__detail__item__active" : "setting__detail__item"}>
                                <Link to="/mysettings/other-travellers" className='setting__detail__item__link'>
                                    <IconRadius width="50px" height="50px">
                                        <PlaneDepartureIcon width='20px' height='20px' fill="#57c1cd" />
                                    </IconRadius>
                                    <p className="setting__detail__item__text">Other travellers</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-8'>

                        {
                            slug === "personal"
                            && <SettingDetailItem
                                title="Personal details"
                                description="Update your information and find out how it's used."
                                image
                                items={[
                                    {
                                        title: "Name",
                                        content: "Mai Xuan Hieu",
                                        action: "Edit"
                                    },
                                    {
                                        title: "Email address",
                                        content: "maixuanhieu250103@gmail.com",
                                        action: "Edit"
                                    },
                                    {
                                        title: "Phone number",
                                        content: "0896210393",
                                        action: "Edit"
                                    },
                                    {
                                        title: "Date of birth",
                                        content: "2003-01-25",
                                        action: "Edit"
                                    },
                                    {
                                        title: "Nationality",
                                        content: "Viet Nam",
                                        action: "Edit"
                                    },
                                    {
                                        title: "Gender",
                                        content: "Male",
                                        action: "Edit"
                                    },
                                    {
                                        title: "Address",
                                        content: "62 Le Thien Thi, Hoa Hai, Ngu Hanh Son, Da Nang",
                                        action: "Edit"
                                    },
                                ]}
                            />
                        }

                        {
                            slug === "security"
                            && <SettingDetailItem
                                title="Security"
                                description="Change your security settings, set up secure authentication or delete your account."
                                items={[
                                    {
                                        title: "Password",
                                        content: "Reset your password regularly to keep your account secure",
                                        action: "Reset",
                                        link: "/reset-password"
                                    },
                                    {
                                        title: "Active sessions",
                                        content: "Selecting ‘Sign out’ will sign you out from all devices except this one. The process can take up to 10 minutes.",
                                        action: "Sign out",
                                        link: "/"
                                    },
                                ]}
                            />
                        }

                        {
                            slug === "payment-details"
                            && <SettingDetailItem
                                title="Payment details"
                                description="Securely add or remove payment methods to make it easier when you book."
                                items={[
                                    {
                                        title: "Payment cards",
                                        content: "Pay with new card",
                                        action: "Add card"
                                    }
                                ]}
                            />
                        }

                        {
                            slug === "other-travellers"
                            && <SettingDetailItem
                                title="Other travallers"
                                description="Add or edit information about the people you’re travelling with."
                                items={[]}
                            />
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default MySettingDetail
