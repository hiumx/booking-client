
import React from 'react'
import "./_setting_item.scss";
import { UserIcon } from '../Icons';
import { Link } from 'react-router-dom';

const SettingItem = ({title = "", description = "", ext = "", children, to = "#" }) => {
    return (
        <Link className='setting__item__wrapper' to={to}>
            <div className='setting__item__desc'>
                <div className='setting__item__icon'>
                    {children}
                </div>
                <div className='setting__item__detail'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
            <p className='setting__item__ext'>{ext}</p>
        </Link>
    )
}

export default SettingItem
