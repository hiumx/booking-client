import React from 'react'
import './_input.scss';

const Input = ({ type, htmlFor, labelName, placeholder }) => {
    return (
        <div className='input__input__item'>
            <label htmlFor={htmlFor} className='input__label'>{labelName}</label>
            <div className='input__wrapper__input'>
                <input type={type} id={htmlFor} className='input__input' placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Input
