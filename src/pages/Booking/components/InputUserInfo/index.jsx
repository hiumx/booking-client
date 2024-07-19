import React from 'react'
import "./_input_user_info.scss";
import PropTypes from 'prop-types';
import Select from 'react-select';
import { COUNTRIES_OPTION } from '~/constants';


const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: '6px',
        fontSize: '14px',
        height: '35px',
        boxShadow: state.isFocused ? '0 0 0 1px blue' : 'none'
    })
}

const InputUserInfo = ({
    label,
    isObligatory,
    description,
    placeholder = "",
    type = "text",
    selects = [],
    style = {},
    children,
    handleChangeSelect = () => {},
    handleChangeInput = () => {},
    value
}) => {
    const text = label.split(" ").join("").toLowerCase();

    return (
        <div className='input__user__info__wrapper' style={{ ...style }}>
            <label htmlFor={text}>{label} {isObligatory && <span>*</span>}</label>
            <div className='iui__input__options'>
                {
                    selects.length > 0
                        ?
                        <Select
                            options={COUNTRIES_OPTION}
                            styles={customStyles}
                            onChange={handleChangeSelect}
                        />
                        :
                        <div className='iui__input__wrapper'>
                            {children}
                            <input
                                type={type}
                                id={text}
                                placeholder={placeholder}
                                className='iui__input'
                                onChange={handleChangeInput}
                                value={value}
                            />
                        </div>
                }
            </div>
            <p>{description}</p>
        </div>
    )
}

InputUserInfo.propTypes = {
    label: PropTypes.string.isRequired,
    isObligatory: PropTypes.bool,
    description: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
}

export default InputUserInfo