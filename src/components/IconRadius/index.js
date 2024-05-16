import React from 'react'
import "./_icon_radius.scss";

const IconRadius = ({ children, width, height }) => {
    return (
        <div className='icon__radius__wrapper' style={{width, height}}>
            {children}
        </div>
    )
}

export default IconRadius
