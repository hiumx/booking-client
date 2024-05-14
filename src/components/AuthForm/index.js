import React from 'react'
import "./_auth_form.scss";

import AuthLayout from '~/layout/AuthLayout';
import { FacebookIcon, GoogleIcon } from '~/components/Icons';

const AuthForm = ({ title, action, children }) => {
    return (
        <div>
            <AuthLayout>
                <div className='login__content'>
                    <h6>{title}</h6>
                    <div>
                        {children}
                        <button className='login__btn'>{action}</button>
                        <div className='login__title__others__wrapper'>
                            <hr className='login__title__others__hr' />
                            <span className='login__title__others'>or use one of these options</span>
                            <hr className='login__title__others__hr' />
                        </div>
                        <ul className='login__list__social__media'>
                            <li className='login__item__sm'>
                                <FacebookIcon className='facebook__icon' width='34px' height='34px' fill='#3a64c4' />
                            </li>
                            <li className='login__item__sm'>
                                <GoogleIcon className='google__icon' width='32px' height='32px' fill='#b70100' />
                            </li>
                        </ul>
                        <hr />
                        <div className='login__policy'>
                            <p>By signing in or creating an account, you agree with our <a href='#'>Terms & conditions</a> and <a href='#'>Privacy statement</a></p>
                            <p>All rights reserved.</p>
                            <p>Copyright (2006 - 2024) - Booking™</p>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </div>
    )
}

export default AuthForm
