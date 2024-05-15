import React from 'react'
import "./_header_sub.scss";
import { HelpIcon } from '~/components/Icons';
import vnFlag from "~/assets/images/vn.png"

const HeaderSub = () => {
    return (
        <div className='header__sub__wrapper'>
            <h5>Booking</h5>
            <div className='header__sub__info'>
                <img src={vnFlag} alt='uk-image' className='header__sub__lang__img' />
                <div className='hs__wrapper__help__icon'>
                    <HelpIcon width='22px' height='22px' className='help__icon' fill = "#fff"/>
                </div>
            </div>
        </div>
    )
}

export default HeaderSub
