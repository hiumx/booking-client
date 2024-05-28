import React from 'react';
import PropTypes from 'prop-types';
import "./_menu_item.scss";
import { Link } from 'react-router-dom';

const MenuItem = (
    { to = "#",
        children,
        title,
        onClick = () => { },
        tag = "Link"
    }
) => {
    const Tag = tag === "Link" ? Link : 'div';
    return (
        <li className='menu__item__desc__item'>
            <Tag
                className='menu__item__link'
                to={to}
                onClick={onClick}
            >
                {children}
                <span>{title}</span>
            </Tag>
        </li>
    )
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    Tag: PropTypes.string.isRequired
}

export default MenuItem
