import React from 'react'
import "./_radio_item.scss";
import PropTypes from 'prop-types';

const RadioItem = ({ 
    title,
    listRadios = [],
    listStyle = {},
    isBorder = false
}) => {

    return (
        <div className={isBorder ? 'radio__item__wrapper radio__item__border' : 'radio__item__wrapper'}>
            <h6 className='radio__item__title'>{title}</h6>
            <div className='radio__item__list__radio' style={{ ...listStyle }}>
                {listRadios.map((radio, idx) => (
                    <div key={idx} className='radio__item__details'>
                        <input
                            type='radio'
                            className='radio__item__input'
                            name={title.split(" ").join("").toLowerCase()}
                            id={radio.split(" ").join("").toLowerCase()}
                            defaultChecked={idx === 0}
                        />
                        <label
                            className='radio__item__label'
                            htmlFor={radio.split(" ").join("").toLowerCase()}
                        >
                            {radio}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

RadioItem.propTypes = {
    title: PropTypes.string,
    listRadios: PropTypes.array.isRequired,
    listRadios: PropTypes.object
}

export default RadioItem