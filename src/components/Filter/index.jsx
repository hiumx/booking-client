import React, { useEffect, useState, memo } from 'react'
import "./_filter.scss";
import PropTypes from 'prop-types';
import { AngleDownIcon, AngleUpIcon } from '../Icons';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Filter = ({ title, items = [], typeCheckbox = "", isList = true, handleChangCheckedFilter }) => {
    const [listItems, setListItems] = useState([]);
    const [isShowMore, setIsShowMore] = useState(items.length > 5);
    const [value, setValue] = useState([0, 200]);

    const handleClick = () => {
        listItems.length === 5 ? setListItems(items) : setListItems(items.slice(0, 5));
        setIsShowMore(!isShowMore);
    }

    const handleChangeCompleteSlider = (data) => {
        console.log(data);
    }

    useEffect(() => {
        setListItems(items.length > 5 ? items.slice(0, 5) : items);
    }, []);

    return (
        <div className='filter__wrapper'>
            <h5 className='filter__title'>{title}</h5>
            {isList
                ?
                <>
                    <ul className='filter__option__list'>
                        {listItems?.map((item, idx) => (
                            <li key={idx} className='filter__option__item'>
                                <div className='filter__item__input__name'>
                                    <input
                                        type='checkbox'
                                        id={`filter-checkbox-${title.slice(0, 2)}-${idx}`}
                                        className='filter__item__input'
                                        name={`filter-input-${title.slice(0, 2)}-${idx}`}
                                        // checked={isChecked}
                                        onChange={() => handleChangCheckedFilter({
                                            idCheck: item?.id,
                                            typeCheckbox
                                        })}
                                    />

                                    <label
                                        htmlFor={`filter-checkbox-${title.slice(0, 2)}-${idx}`}
                                        className='filter__item__name'
                                    >
                                        {item?.name}
                                    </label>

                                </div>
                                <p className='filter__item__number'>{item.quantity}</p>
                            </li>
                        ))}
                    </ul>

                    {items.length > 5 &&
                        <div className='filter__see__all' onClick={handleClick}>
                            <p className='filter__see__all__text'>
                                {isShowMore ? `See all (${items.length})` : "See less"}
                            </p>
                            {isShowMore
                                ?
                                <AngleDownIcon width='13px' height='13px' fill='#006ce4' />
                                :
                                <AngleUpIcon width='13px' height='13px' fill='#006ce4' />
                            }
                        </div>

                    }
                </>
                :
                <div className='filter__slider__wrapper'>
                    <p className='filter__slider__value'>US$ <b>{value[0]}</b> - US$ <b>{value[1]}</b></p>
                    <Slider
                        range
                        min={0}
                        max={200}
                        value={value}
                        defaultValue={[0, 200]}
                        className='filter__slider'
                        onChange={(data) => setValue(data)}
                        onChangeComplete={handleChangeCompleteSlider}
                    />
                </div>
            }
        </div>
    )
}

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array,
    typeCheckbox: PropTypes.string,
    isList: PropTypes.bool,
    handleChangCheckbox: PropTypes.func
}

export default memo(Filter);
