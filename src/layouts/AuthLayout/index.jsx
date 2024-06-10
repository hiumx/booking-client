import React from 'react'
import HeaderSub from "~/layouts/components/SubHeader";
import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => {
    return (
        <div>
            <HeaderSub />
            <div className='auth__layout__content'>
                {children}
            </div>
        </div>
    )
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthLayout
