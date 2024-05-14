import React from 'react'
import './_button.scss';

const Button = ({ type, htmlFor, labelName, placeholder }) => {
    return (
        <div className='login__input__item'>
            <label htmlFor={htmlFor} className='login__label'>{labelName}</label>
            <div className='login__wrapper__input'>
                <input type={type} id={htmlFor} className='login__input' placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Button
