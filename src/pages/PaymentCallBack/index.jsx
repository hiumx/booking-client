import React from 'react'
import "./_payment_callback.scss";
import { CircleCheck } from '~/components/Icons';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { USD_VND } from '~/constants';
import { convertToDate } from '~/utils';

const PaymentCallBack = () => {

    const location = useLocation();

    const {amount, date, numberRef} = queryString.parse(location.search);

    return (
        <div className='payment__callback__wrapper'>
            <div className='payment__callback__sm'>
                <CircleCheck width='58px' height='58px' fill='#22C55D' />
                <h2 className='payment__callback__status'>Payment Successful</h2>
                <p className='payment__callback__message'>Thank you for your purchase!</p>
            </div>
            <ul className='payment__callback__info'>
                <li className='payment__callback__info__item'>
                    <p className='payment__callback__info__item__left'>Amount Paid:</p>
                    <p className='payment__callback__info__item__right'>{`$${Number(amount) / (USD_VND * 100)}`}</p>
                </li>
                <li className='payment__callback__info__item'>
                    <p className='payment__callback__info__item__left'>Date & Time:</p>
                    <p className='payment__callback__info__item__right'>{convertToDate(date).toString().split("GMT")?.[0]}</p>
                </li>
                <li className='payment__callback__info__item'>
                    <p className='payment__callback__info__item__left'>Reference Number:</p>
                    <p className='payment__callback__info__item__right'>{numberRef}</p>
                </li>
            </ul>
            <Link
                className='payment__callback__home__return__btn'
                to="/"
            >
                Return to Homepage
            </Link>
        </div>
    )
}

export default PaymentCallBack