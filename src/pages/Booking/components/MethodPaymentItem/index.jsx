import React from 'react'
import "./_method_payment_item.scss";
import PropTypes from 'prop-types';

const MethodPaymentItem = ({
    children,
    desc,
    idx,
    currentActive,
    handleChecked
}) => {

    return (
        <div className='method__payment__item__wrapper' onMouseDown={() => handleChecked(idx)}>
            <div
                className={currentActive === idx
                    ? 'method__payment__item__content method__payment__item__active'
                    : 'method__payment__item__content'
                }
            >
                <input
                    type='checkbox'
                    className='method__payment__item__checkbox'
                    checked={currentActive === idx}
                />
                <div className='method__payment__item__icon__wrapper'>
                    {children}
                </div>
            </div>
            <p className='method__payment__item__desc'>{desc}</p>
        </div>
    )
}

MethodPaymentItem.propTypes = {
    children: PropTypes.node.isRequired,
    desc: PropTypes.string.isRequired,
    idx: PropTypes.number.isRequired,
    currentActive: PropTypes.number.isRequired,
    handleChecked: PropTypes.func.isRequired,
}

export default MethodPaymentItem