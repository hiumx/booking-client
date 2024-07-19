import React from 'react'
import Header from '../components/Header'
import PropTypes from 'prop-types';
import SubFooter from '../components/SubFooter';

const CommonLayout = ({ children }) => {
    return (
        <div>
            <Header style={{padding: '0 14%'}}/>
            {children}
            <SubFooter />
        </div>
    )
}

CommonLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default CommonLayout