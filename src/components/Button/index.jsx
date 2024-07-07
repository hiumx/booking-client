import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import "./_button.scss";

const Button = ({ title, to = "#", className }) => {
    return (
        <div className='button__wrapper'>
            <Link className='button__link' to={to}>{title}</Link>
        </div>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string
}

export default Button
