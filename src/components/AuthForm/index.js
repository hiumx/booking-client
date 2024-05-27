import React from 'react'
import "./_auth_form.scss";
import PropTypes from 'prop-types'

import AuthLayout from '~/layout/AuthLayout';
import { FacebookIcon, GoogleIcon } from '~/components/Icons';

const AuthForm = ({ title, action, children, isSocial = true, onClick, errorMsg }) => {
    return (
        <div>
            <AuthLayout>
                <div className='auth__content'>
                    <h6>{title}</h6>
                    <div>
                        {children}
                        <button className='auth__btn' onClick={onClick}>{action}</button>
                        {errorMsg && <p className='auth__error__msg'>{errorMsg}</p>}
                        {isSocial &&
                            <>
                                <div className='auth__title__others__wrapper'>
                                    <hr className='auth__title__others__hr' />
                                    <span className='auth__title__others'>or use one of these options</span>
                                    <hr className='auth__title__others__hr' />
                                </div>
                                <ul className='auth__list__social__media'>
                                    <li className='auth__item__sm'>
                                        <FacebookIcon className='facebook__icon' width='34px' height='34px' fill='#3a64c4' />
                                    </li>
                                    <li className='auth__item__sm'>
                                        <GoogleIcon className='google__icon' width='32px' height='32px' fill='#b70100' />
                                    </li>
                                </ul>
                                <hr />
                                <div className='auth__policy'>
                                    <p>By signing in or creating an account, you agree with our <a href='#'>Terms & conditions</a> and <a href='#'>Privacy statement</a></p>
                                    <p>All rights reserved.</p>
                                    <p>Copyright (2006 - 2024) - Booking™</p>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </AuthLayout>
        </div>
    )
}

AuthForm.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    children: PropTypes.node,
    isSocial: PropTypes.bool,
    onClick: PropTypes.func,
    errorMsg: PropTypes.string
}

export default AuthForm
