import React from 'react'
import "./_sub_footer.scss";
import { LIST_ITEMS_SUB_FOOTER } from '~/constants';
import { Link } from 'react-router-dom';

const SubFooter = () => {
    return (
        <div className='sub__footer__wrapper'>
            <ul className='sub__footer__list'>
                {LIST_ITEMS_SUB_FOOTER.map((item, idx) => (
                    <li key={idx} className='sub__footer__item'>
                        <Link to="#" className='sub__footer__item__link'>{item}</Link>
                    </li>
                ))}
            </ul>
            <p className='sub__footer__copyright'>Copyright © 1999–2024 Booking. All rights reserved.</p>
        </div>
    )
}

export default SubFooter