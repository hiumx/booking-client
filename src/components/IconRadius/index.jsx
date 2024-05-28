import React from 'react'
import "./_icon_radius.scss";
import PropTypes from 'prop-types';

const IconRadius = ({ children, width, height }) => {
    return (
        <div className='icon__radius__wrapper' style={{width, height}}>
            {children}
        </div>
    )
}

IconRadius.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default IconRadius
