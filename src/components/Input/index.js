import React from 'react'
import './_input.scss';
import PropTypes from 'prop-types';

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

Input.propTypes = {
    type: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
    labelName: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    name: PropTypes.string 
}

export default Input
