import React, { useState } from 'react'
import "./_room_booking_detail.scss";
import Amenity from '../Amenity';
import { ArrowLeftIcon, ChevronRightIcon, ExclamationIcon } from '~/components/Icons';
import SeeMore from '~/components/SeeMore';

const amenities = ["Pool", "Spa", "Air conditioning", "Wifi", "Bar", "Free parking", "Airport transfer"];

const RoomBookingDetail = ({ data }) => {

    const [totalPrice, setTotalPrice] = useState(250);

    const handleChangeExtra = ({ type = "", value = 0 }) => {
        let price = totalPrice;
        if (type === "breakfast") {
            price += value;
            setTotalPrice(price);
        } else {
            price -= value
            setTotalPrice(price);
        }
    }

    return (
        <div className='room__booking__detail__wrapper'>
            <div className='rbd__img__wrapper'>
                <img
                    src='https://lh7-us.googleusercontent.com/vCCUKz-uh0yWtGCpdtZVsX7uMxGnS_BGFYYAx7zwPjHU_uuuWe0jgXb8Cud2CXxZPCH94RT1jZYCh3ZGVxB1ZloljKCd2c6000YIXmdhTP-3rvX5hKBHV97vQeu9pTMyssb2WLZt6E42zlmWjsXyoyA'
                    alt='booking-room-img'
                    className='rbd__img'
                />
            </div>
            <div className='rbd__description'>
                <h5 className='rbd__description__name'>Deluxe Room, 1 King Bed, Non Smoking</h5>
                <ul className='rbd__description__amenities'>
                    {amenities?.map((amenity, idx) => (
                        <li key={idx}>
                            <Amenity style={{ padding: '0' }} title={amenity} />
                        </li>
                    ))}
                </ul>
                <div className='rbd__description__refundable__deadline'>
                    <div className='rbd__description__refundable'>
                        <p className='rbd__description__text'>Fully refundable</p>
                        <ExclamationIcon className='rbd__exclamation__icon' width='11px' height='11px' fill='#227950' />
                    </div>
                    <p className='rbd__description__deadline'>Before Mon, 17 Jun</p>
                </div>
                <SeeMore text="More details" />
            </div>
            <div className='rdb__balance'>
                <div className='rbd__extra'>
                    <div className='rdb__extra__header'>
                        <p className='rdb__extra__title'>Extra</p>
                        <p className='rdb__extra__price'>Price per night</p>
                    </div>
                    <ul className='rbd__extra__list'>
                        <li className='rbd__extra__item'>
                            <div className='rbd__extra__radio' >
                                <input
                                    type='radio' className=''
                                    id={`rdb-extra-no-extra-${data}`}
                                    name={`rdb-extra-radio-${data}`}
                                    onChange={() => handleChangeExtra({ type: "", value: 20 })}
                                    defaultChecked
                                />
                                <label htmlFor={`rdb-extra-no-extra-${data}`}>No extras</label>
                            </div>
                            <p>+ 0 US</p>
                        </li>
                        <li className='rbd__extra__item'>
                            <div className='rbd__extra__radio'>
                                <input
                                    type='radio'
                                    className=''
                                    id={`rdb-extra-breakfast-${data}`}
                                    name={`rdb-extra-radio-${data}`}
                                    onChange={() => handleChangeExtra({ type: "breakfast", value: 20 })}
                                />
                                <label htmlFor={`rdb-extra-breakfast-${data}`}>Breakfast buffet</label>
                            </div>
                            <p>+ 20 US</p>
                        </li>
                    </ul>
                </div>
                <div className='rdb__checkout'>
                    <h4 className='rdb__checkout__price'>250 US</h4>
                    <div className='rdb__checkout__detail'>
                        <div className='rdb__checkout__total__price'>
                            <p>{`${totalPrice} US total`}</p>
                            <p>Includes taxes & fees</p>
                            <SeeMore text="Price details" />
                        </div>
                        <div className='rdb__checkout__reserve'>
                            <p>We had 5 left</p>
                            <button className='btn btn-primary rdb__checkout__reserve__btn'>Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomBookingDetail
