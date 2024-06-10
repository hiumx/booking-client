import React from 'react'
import "./_item_layout.scss";
import PropTypes from 'prop-types';

const ItemLayout = ({ children, style = {} }) => {
    return (
        <div className='item__layout__wrapper'
            style={{ ...style }}
        >
            {children}
        </div>
    )
}

ItemLayout.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object
}

export default ItemLayout