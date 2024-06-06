import React from 'react'
import "./_footer.scss";

import booking_logo from "~/assets/logos/booking_logo.webp";
import agoda_logo from "~/assets/logos/agoda_logo.png";
import kayak_logo from "~/assets/logos/kayak_logo.png";
// import open_table_logo from "~/assets/logos/open_table_logo.png";
import priceline_logo from "~/assets/logos/priceline_logo.png";
import rentalcars_logo from "~/assets/logos/rentalcars_logo.png";

const listLogo = [
    booking_logo, agoda_logo, kayak_logo,
    priceline_logo, rentalcars_logo
];

const Footer = () => {
    return (
        <div className='footer__wrapper'>
            <p>All material herein © 2005–2024 Booking Company Pte. Ltd. All Rights Reserved.</p>
            <p>Booking is part of Booking Holdings Inc., the world leader in online travel & related services.</p>
            <ul className='footer__logo__list'>
                {listLogo.map((logo, idx) => (
                    <li key={idx} className='footer__logo__item'>
                        <img
                            src={logo}
                            alt='booking-logo'
                            className={`footer__logo__item__img footer__logo__item__img__${idx}`}
                        />
                    </li>
                ))}
            </ul>
            <p className='foot__code'>hk-pc-2g-acm-web-user-7b5bf8b6df-nbb7j</p>
        </div>
    )
}

export default Footer
