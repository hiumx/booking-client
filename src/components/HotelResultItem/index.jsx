import React, { useState } from 'react'
import "./_hotel_result_item.scss";
import { CheckIcon, ChevronRightIcon, HeartIcon, HeartSolidIcon } from '../Icons';
import MoreDetailButton from '../MoreDetailButton';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { checkObjEmpty, mapToNameFromScore } from '~/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactStars from 'react-stars';
import ReviewFeedback from '../ReviewFeedback';
import queryString from "query-string";

const HotelResultItem = ({ data, options = {} }) => {
    const [isSaved, setIsSaved] = useState(false);
    const { id, image, name, location, fromCenter, reviews, room, rate, typeHotel } = data;

    const locationPage = useLocation();

    const navigator = useNavigate();

    const user = useSelector(state => state.user.userMyInfo);

    const handleClinkSave = (type) => {
        setIsSaved(!isSaved);
        if (type === "slight" && checkObjEmpty(user))
            navigator("/auth/sign-in");
    }

    return (
        <LazyLoad height={242}>
            <div className='hotel__result__item__wrapper'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='hri__img__wrapper'>
                            <Link to={`/search-result/${id}/${locationPage.search}`}>
                                <img
                                    src={image?.url}
                                    alt='hotel-img'
                                    className='hri__img'
                                />
                            </Link>
                            {isSaved ?
                                <div className='hri__img__icon' onClick={() => handleClinkSave("solid")}>
                                    <HeartSolidIcon className='hri__heart__icon' width='17px' height='17px' fill='#e55050' />
                                </div>
                                :
                                <div className='hri__img__icon' onClick={() => handleClinkSave("slight")}>
                                    <HeartIcon className='hri__heart__icon' width='17px' height='17px' fill='#7e26a9' />
                                </div>
                            }
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='hri__overview'>
                            <div>
                                <div className='hri__title__star'>
                                    <Link className='hri__title__wrapper' to={`/search-result/${id}/${locationPage.search}`}>
                                        <h4 className='hri__title'>{name}</h4>
                                    </Link>
                                    <span>
                                        <ReactStars
                                            count={5}
                                            edit={false}
                                            size={11}
                                            value={rate}
                                            color2={'#ffd700'}
                                        />
                                    </span>
                                </div>
                                <p className='hri__location'>
                                    <a className='hri__location__link' href='#'>{location}</a>
                                    <a className='hri__location__link' href='#'>Show in map</a>
                                    <span>{`${fromCenter} km from center`}</span>
                                </p>
                            </div>
                            <div className='hri__evaluate'>
                                <div className='hri__evaluate__reviews' onClick={() => navigator(`/search-result/${id}/${locationPage.search}`)}>
                                    <ReviewFeedback reviews={reviews} />
                                    <h6 className='hri__evaluate__comfort'>Comfort 10</h6>
                                </div>
                                <button className='hri__evaluate__link'>New to Booking.com</button>
                            </div>
                        </div>
                        <MoreDetailButton />
                        <div className='hri__detail'>
                            <div className='hri__detail__convenient'>
                                <p className='hri__convenient__room'>{room?.name}</p>
                                <p className='hri__convenient__beds'>{`${room?.numberBed} double bed`}</p>
                                <div className='hri__detail__benefit'>
                                    <CheckIcon fill='#008234' width='12px' height='12px' />
                                    <p><span className='hri__detail__benefit__bold'>Free cancellation</span></p>
                                </div>
                                <div className='hri__detail__benefit'>
                                    <CheckIcon fill='#008234' width='12px' height='12px' />
                                    <p><span className='hri__detail__benefit__bold'>No prepayment needed</span> - pay at the property</p>
                                </div>
                                <p className='hri__detail__room__left'>Only 2 rooms left at this price on our site</p>
                            </div>

                            <div className='hri__value'>
                                <p className='hri__value__desc'>
                                    {`${options?.numberOfNights} nights, ${options?.numberOfAdults} adults`}
                                </p>
                                <h3 className='hri__value__money'>{`US$${room?.price}`}</h3>
                                <p className='hri__value__desc'>Includes taxes and charges</p>
                                <div className='hri__see__availability' onClick={() => navigator(`/search-result/${id}/${locationPage.search}`)}>
                                    <p>See availability</p>
                                    <ChevronRightIcon width='12px' height='12px' fill='#fff' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LazyLoad>
    )
}

HotelResultItem.propTypes = {
    data: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired
}

export default HotelResultItem
