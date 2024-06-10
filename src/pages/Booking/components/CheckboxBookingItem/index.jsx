import React from 'react'
import "./_checkbox_booking_item.scss";
import PropTypes from 'prop-types';

const CheckboxBookingItem = ({ title, description }) => {
    return (
        <div className='checkbox__booking__item__wrapper'>
            <input type='checkbox' className='cbi__checkbox__input'/>
            <div className='cbi__info'>
                <p className='cbi__title'>{title}</p>
                {description && <p className='cbi__desc'>{description}</p>}
            </div>
        </div>
    )
}

CheckboxBookingItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default CheckboxBookingItem