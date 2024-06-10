import React from 'react'
import "./_input_user_info.scss";
import PropTypes from 'prop-types';
import Select from 'react-select';

const options = [
    { value: 'price_lowest', label: 'Viet Nam' },
    { value: 'price_highest', label: 'Korea' },
    { value: 'rating_high', label: 'United State' },
    { value: 'rating_low', label: 'United Kingdom' },
    { value: 'home_department', label: 'Australia' },
    { value: 'distance_center', label: 'France' },
    { value: 'top_review', label: 'India' },
];

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
    selects = []
}) => {
    const text = label.split(" ").join("").toLowerCase();
    
    return (
        <div className='input__user__info__wrapper'>
            <label htmlFor={text}>{label} {isObligatory && <span>*</span>}</label>
            <div className='iui__input__wrapper'>
                {
                    selects.length > 0
                        ?
                        <Select
                            options={options}
                            styles={customStyles}
                        />
                        :
                        <input type={type} id={text} placeholder={placeholder} />
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
    placeholder: PropTypes.string
}

export default InputUserInfo