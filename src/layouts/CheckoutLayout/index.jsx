import React from 'react'
import PropTypes from 'prop-types';
import SubHeader from '../components/SubHeader';
import SubFooter from '../components/SubFooter';

const CheckoutLayout = ({ children }) => {
    return (
        <div className='checkout__layout__wrapper'>
            <SubHeader />
            <div className='checkout__layout__content'>
                {children}
            </div>
            <SubFooter />
        </div>
    )
}

CheckoutLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default CheckoutLayout