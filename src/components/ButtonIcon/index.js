import React from 'react'
import "./_button_icon.scss";
import { Link } from 'react-router-dom';

const ButtonIcon = ({ children, title, to = "#", isBorder = false }) => {
    return (
        <div className='button__icon__wrapper'>
            <Link
                className={isBorder ? "button__icon__link button__is__border" : "button__icon__link"}
                to={to}
            >
                {children}
                <span className="button__icon__title">{title}</span>
            </Link>
        </div>
    )
}

export default ButtonIcon
