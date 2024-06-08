import React from 'react';
import "./_booking.scss";

import { CONTACTS } from '~/constants'
import Contact from '~/layouts/components/Contact'
import Footer from '~/layouts/components/Footer'
import Header from '~/layouts/components/Header'
import MyStep from '~/components/MyStep';
import HeaderSub from '~/layouts/components/HeaderSub';

const Booking = () => {
    return (
        <div className='booking__wrapper'>
            <HeaderSub />
            <div className='booking__content'>
                <MyStep />
                BOOKING
            </div>
            {/* <Contact contacts={CONTACTS} /> */}
            {/* <Footer /> */}
        </div>
    )
}

export default Booking