import React, { useState } from 'react'
import "./_banner.scss";
import { BedIcon, CalendarIcon, UserIcon } from '../Icons';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import { format } from "date-fns";

const Banner = () => {

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [isOpenDate, setIsOpenDate] = useState(false);
    const [isOpenOptions, setIsOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    return (
        <div className='banner__wrapper'>
            <h1>Find your next stay</h1>
            <h5>Search low prices on hotels, homes and much more...</h5>

            <div className='banner__search__box'>
                <div className='search__box__item'>
                    <BedIcon fill='#453030' />
                    <input type='text' className='search__input__where' placeholder='Where are you going?' />
                </div>
                <div className='search__box__item'>
                    <CalendarIcon fill='#453030' />
                    <span className='search__label' onClick={() => setIsOpenDate(!isOpenDate)}>
                        {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                    </span>
                    {isOpenDate &&
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            className="date"
                            minDate={new Date()}
                        />
                    }
                </div>
                <div className='search__box__item'>
                    <UserIcon fill='#453030' />
                    <span className='search__label header__search__text' onClick={() => setIsOpenOptions(!isOpenOptions)}
                    >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                    {isOpenOptions && (
                        <div className="options">
                            <div className="option__item">
                                <span className="option__text">Adult</span>
                                <div className="option__counter">
                                    <button
                                        disabled={options.adult <= 1}
                                        className="option__counter__button"
                                        onClick={() => handleOption("adult", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="option__counter__number">
                                        {options.adult}
                                    </span>
                                    <button
                                        className="option__counter__button"
                                        onClick={() => handleOption("adult", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="option__item">
                                <span className="option__text">Children</span>
                                <div className="option__counter">
                                    <button
                                        disabled={options.children <= 0}
                                        className="option__counter__button"
                                        onClick={() => handleOption("children", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="option__counter__number">
                                        {options.children}
                                    </span>
                                    <button
                                        className="option__counter__button"
                                        onClick={() => handleOption("children", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="option__item">
                                <span className="option__text">Room</span>
                                <div className="option__counter">
                                    <button
                                        disabled={options.room <= 1}
                                        className="option__counter__button"
                                        onClick={() => handleOption("room", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="option__counter__number">
                                        {options.room}
                                    </span>
                                    <button
                                        className="option__counter__button"
                                        onClick={() => handleOption("room", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className='option__item'>
                                <button
                                    className='option__item__done__btn'
                                    onClick={() => setIsOpenOptions(false)}
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <button className='search__box__btn'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
