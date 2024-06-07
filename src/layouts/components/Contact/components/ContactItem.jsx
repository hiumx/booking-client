import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import "./_contact_item.scss";


const ContactItem = ({ title, items = [] }) => {
    return (
        <div className='contact__item__wrapper'>
            <h6 className='contact__item__title'>{title}</h6>
            <ul className='contact__item__list'>
                {items?.map((item, idx) => (
                    <li key={idx} className='contact__item__item'>
                        <Link to="#" className='contact__item__link'>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

ContactItem.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}

export default ContactItem
