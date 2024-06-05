import React from 'react'
import "./_sub_banner_item.scss";
import { CartFlatbedIcon } from '~/components/Icons';
import PropTypes from 'prop-types';

const SubBannerItem = ({ children, style }) => {
    return (
        <div className='sub__banner__item__wrapper' style={{ ...style }}>
            <div className='sbi__icon__wrapper'>
                {children}
            </div>
            <div>
                <p className='sbi__title'>Unlock travel rewards with One Key</p>
            </div>
        </div>
    )
}

SubBannerItem.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object
}

export default SubBannerItem
