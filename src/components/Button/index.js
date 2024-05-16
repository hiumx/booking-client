import React from 'react'
import { Link } from 'react-router-dom';

import "./_button.scss";

const Button = ({ title, to = "#" }) => {
  return (
    <div className='button__wrapper'>
      <Link className='button__link' to={to}>{title}</Link>
    </div>
  )
}

export default Button
