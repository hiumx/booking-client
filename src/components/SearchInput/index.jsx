import React, { useEffect, useState } from 'react'
import "./_search_input.scss";
import { getResultSearchHotel } from '~/store/actions/hotel.action';
import { checkObjEmpty } from '~/utils';
import { BedIcon, CalendarIcon, UserIcon } from '../Icons';

import { DateRange } from 'react-date-range';
import { useNavigate } from 'react-router-dom';
import { format } from "date-fns";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const SearchInput = ({ style, searchValue = {}, setIsNotFound = () => {} }) => {
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
        adult: 2,
        children: 0,
        room: 1,
    });
    const [location, setLocation] = useState("");

    const navigator = useNavigate();
    const dispatch = useDispatch();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? Number(options[name]) + 1 : Number(options[name]) - 1,
            };
        });
    };

    const handleClickSearch = () => {
        const { startDate, endDate } = dates[0];
        const payload = {
            location,
            startDate,
            endDate,
            options
        }

        if (location === "") {
            toast.error("Please enter location!");
        } else if (startDate?.getDate() === endDate?.getDate()) {
            toast.error("Please choose range of date!");
        } else {
            setIsNotFound(false);
            navigator(
                `/search-result?location=${location}&startDate=${startDate}&endDate=${endDate}&adult=${options.adult}&children=${options.children}&room=${options.room}`
            );
            setIsOpenDate(false);
            setIsOpenOptions(false);
            dispatch(getResultSearchHotel(payload));
        }
    }

    useEffect(() => {
        if (!checkObjEmpty(searchValue)) {
            const { location, startDate, endDate, adult, children, room } = searchValue;

            setLocation(location);
            setDates([{
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                key: 'selection'
            }]);
            setOptions({
                adult, children, room
            });
        }
    }, [])


    return (
        <div className='banner__search__box' style={style}>
            <div className='search__box__item'>
                <BedIcon fill='#6785c5' />
                <input
                    type='text'
                    className='search__input__where'
                    placeholder='Where are you going?'
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                />
            </div>
            <div className='search__box__item'>
                <CalendarIcon fill='#6785c5' />
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
                <UserIcon fill='#6785c5' />

                <span className='search__label header__search__text'
                    onClick={() => setIsOpenOptions(!isOpenOptions)}
                >
                    {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
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
                <button className='search__box__btn' onClick={handleClickSearch}>Search</button>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                style={{fontSize: '14px'}}
            />
        </div>
    )
}

SearchInput.propTypes = {
    style: PropTypes.object,
    searchValue: PropTypes.object,
    setIsNotFound: PropTypes.func
}

export default SearchInput
