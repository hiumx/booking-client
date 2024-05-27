import React from 'react'
import "./_hotel_result_item.scss";
import { CheckIcon, ChevronRightIcon, HeartIcon } from '../Icons';

const HotelResultItem = () => {
    return (
        <div className='hotel__result__item__wrapper'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='hri__img__wrapper'>
                        <img
                            src='https://d8271hh5ynwda.cloudfront.net/1716714698368-534019544.jpg'
                            alt='hotel-img'
                            className='hri__img'
                        />
                        <div className='hri__img__icon'>
                            <HeartIcon width='17px' height='17px' fill='#7e26a9'/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <div className='hri__overview'>
                        <div>
                            <h4 className='hri__title'>Thu Trang Homestay Cu Lao Cham</h4>
                            <p className='hri__location'>
                                <a className='hri__location__link' href='#'>Hoi An</a> .
                                <a className='hri__location__link' href='#'>Show in map</a>
                                . 20.9 km from centre
                            </p>
                        </div>
                        <div className='hri__evaluate'>
                            <div>
                                <div className='hri__evaluate__review'>
                                    <div>
                                        <p className='hri__evaluate__exceptional'>Exceptional</p>
                                        <p className='hri__evaluate__num__review'>1 review</p>
                                    </div>
                                    <button className='hri__evaluate__point__btn'>10</button>
                                </div>
                                <h6 className='hri__evaluate__comfort'>Comfort 10</h6>
                            </div>
                            <button className='hri__evaluate__link'>New to Booking.com</button>
                        </div>
                    </div>
                    <div>
                        <button className='hri__free__taxi'>Free airport taxi</button>
                    </div>
                    <div className='hri__detail'>
                        <div className='hri__detail__convenient'>
                            <p className='hri__convenient__room'>Deluxe Double Room with Sea View</p>
                            <p className='hri__convenient__beds'>1 double bed</p>
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
                            <p className='hri__value__desc'>8 nights, 2 adults</p>
                            <h3 className='hri__value__money'>US$87</h3>
                            <p className='hri__value__desc'>Includes taxes and charges</p>
                            <div className='hri__see__availability'>
                                <p>See availability</p>
                                <ChevronRightIcon width='12px' height='12px' fill='#fff' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelResultItem
