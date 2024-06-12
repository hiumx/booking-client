import React from 'react'
import PropTypes from 'prop-types';
import "./_radio_item_payment.scss";

const RadioItemPayment = ({ label, name, desc, children }) => {
    return (
        <div className='radio__item__payment__wrapper'>
            <div className='rip__details'>
                <input
                    type='radio'
                    className='rip__input'
                    name={name}
                    id={label.split(" ").join("").toLowerCase()}
                />
                <div>
                    <label
                        className='rip__label'
                        htmlFor={label.split(" ").join("").toLowerCase()}
                    >
                        {label}

                    </label>
                    <p className='rip__desc'>{desc}</p>
                    <div className='rip__icons'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

RadioItemPayment.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string,
    children: PropTypes.node
}

export default RadioItemPayment