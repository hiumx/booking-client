import React, { useState } from 'react'
import "./_room_booking_detail.scss";
import Amenity from '../Amenity';
import { ArrowLeftIcon, ChevronRightIcon, ExclamationIcon } from '~/components/Icons';
import SeeMore from '~/components/SeeMore';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkObjEmpty } from '~/utils';

const amenities = ["Pool", "Spa", "Air conditioning", "Wifi", "Bar", "Free parking", "Airport transfer"];

const RoomBookingDetail = ({ data }) => {

    const roomId = data?.id;

    const [totalPrice, setTotalPrice] = useState(data?.price || 0);
    const user = useSelector(state => state.user.userMyInfo);
    const navigator = useNavigate();

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

    const handleClickReserve = () => {
        if(checkObjEmpty(user)) {
            navigator("/auth/sign-in");
        } else {
            navigator("/book")
        }
    }

    console.log(user);

    return (
        <div className='room__booking__detail__wrapper'>
            <div className='rbd__img__wrapper'>
                <img
                    src='https://media.istockphoto.com/id/492189224/photo/seaview-bedroom.jpg?s=612x612&w=0&k=20&c=tSL5OoSdxW3l7WzdBGU2_NnGNjDH88twjNZTTkll2jY='
                    alt='booking-room-img'
                    className='rbd__img'
                />
            </div>
            <div className='rbd__description'>
                <h5 className='rbd__description__name'>{data?.name}</h5>
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
                                    id={`rdb-extra-no-extra-${roomId}`}
                                    name={`rdb-extra-radio-${roomId}`}
                                    onChange={() => handleChangeExtra({ type: "", value: 20 })}
                                    defaultChecked
                                />
                                <label htmlFor={`rdb-extra-no-extra-${roomId}`}>No extras</label>
                            </div>
                            <p>+ 0 US</p>
                        </li>
                        <li className='rbd__extra__item'>
                            <div className='rbd__extra__radio'>
                                <input
                                    type='radio'
                                    className=''
                                    id={`rdb-extra-breakfast-${roomId}`}
                                    name={`rdb-extra-radio-${roomId}`}
                                    onChange={() => handleChangeExtra({ type: "breakfast", value: 20 })}
                                />
                                <label htmlFor={`rdb-extra-breakfast-${roomId}`}>Breakfast buffet</label>
                            </div>
                            <p>+ 20 US</p>
                        </li>
                    </ul>
                </div>
                <div className='rdb__checkout'>
                    <h4 className='rdb__checkout__price'>{`${data?.price} US`}</h4>
                    <div className='rdb__checkout__detail'>
                        <div className='rdb__checkout__total__price'>
                            <p>{`${totalPrice} US total`}</p>
                            <p>Includes taxes & fees</p>
                            <SeeMore text="Price details" />
                        </div>
                        <div className='rdb__checkout__reserve'>
                            <p>We had 5 left</p>
                            <button
                                className='btn btn-primary rdb__checkout__reserve__btn'
                                onClick={handleClickReserve}
                            >
                                Reserve
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomBookingDetail
