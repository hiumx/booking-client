import React from 'react'
import './_input.scss';

const Input = ({ type, htmlFor, labelName, placeholder, value, onChange, name = "" }) => {
    return (
        <div className='input__input__item'>
            <label htmlFor={htmlFor} className='input__label'>{labelName}</label>
            <div className='input__wrapper__input'>
                <input 
                    type={type} 
                    id={htmlFor} 
                    name={name}
                    className='input__input' 
                    value={value}
                    placeholder={placeholder} 
                    onChange={onChange}
                />
            </div>

        </div>
    )
}

export default Input
