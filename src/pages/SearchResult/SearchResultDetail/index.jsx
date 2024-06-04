import React from 'react'
import "./_search_result_detail.scss";
import Header from '~/layouts/components/Header';
import SubNav from '~/components/SubNav';
import ReactStars from 'react-stars';
import { CarIcon, LocationIcon } from '~/components/Icons';
import SearchInput from '~/components/SearchInput';
import ReviewFeedback from '~/components/ReviewFeedback';
import Amenity from './components/Amenity';
import { Link } from 'react-router-dom';
import SimpleMap from '~/components/SimpleMap';

const SearchResultDetail = () => {
    const reviewFake = [
        {
            point: 9.0
        }
    ]
    const amenities = ["Pool", "Spa", "Air conditioning", "Wifi", "Bar", "Free parking", "Airport transfer"];
    return (
        <div className='search__result__detail__wrapper'>
            <Header style={{ padding: '0 14%' }} />
            <div className='srd__search__input__wrapper'>
                <SearchInput style={{ top: '10px', padding: '0 14%' }} />
            </div>
            <div className='srd__content'>
                <SubNav />

                <div className='srd__overview'>
                    <div className='srd__overview__title__star'>
                        <h2 className='srd__overview__title'>ENSO Retreat Hoi An</h2>
                        <ReactStars
                            count={5}
                            edit={false}
                            size={14}
                            value={4}
                            color2={'#ffd700'}
                        />
                    </div>
                    <div className='srd__overview__location'>
                        <LocationIcon fill='#006ce4' />
                        <p className='srd__overview__location__detail'>
                            Thanh Tam Village, Cam Thanh Commune, Hoi An city, Quang Nam province, Vietnam
                            - <a href='#' className='srd__overview__location__link'>Excellent location - show map</a>
                        </p>
                    </div>
                    <div className='srd__overview__deliver'>
                        <CarIcon fill='#008234' width='14px' height='14px' />
                        <p className='srd__overview__deliver__detail'>
                            Book a stay over US$54 and get a free private taxi from the airport
                        </p>
                    </div>
                </div>

                <div className='srd__images'>
                    <div className='srd__primary__img__wrapper'>
                        <img
                            src='https://d8271hh5ynwda.cloudfront.net/1716947029584-450541386.jpg'
                            alt='hotel-img'
                            className='srd__primary__img'
                        />
                    </div>
                    <div className='srd__secondary__img__wrapper'>
                        <div className='srd__img__wrapper'>
                            <img
                                src='https://d8271hh5ynwda.cloudfront.net/1716947029239-450541293.jpg'
                                alt='hotel-img'
                                className='srd__secondary__img'
                            />
                        </div>
                        <div className='srd__img__wrapper'>
                            <img
                                src='https://d8271hh5ynwda.cloudfront.net/1716947028892-450541292.jpg'
                                alt='hotel-img'
                                className='srd__secondary__img'
                            />
                        </div>
                        <div className='srd__img__wrapper'>
                            <img
                                src='https://d8271hh5ynwda.cloudfront.net/1716947028264-450537385.jpg'
                                alt='hotel-img'
                                className='srd__secondary__img'
                            />
                        </div>
                        <div className='srd__img__wrapper'>
                            <img
                                src='https://d8271hh5ynwda.cloudfront.net/1716947026990-20964731.jpg'
                                alt='hotel-img'
                                className='srd__secondary__img'
                            />
                        </div>
                    </div>
                </div>
                <div className='srd__feedback__near row'>
                    <div className='col-lg-8'>
                        <div className='srd__reviews__wrapper'>
                            <ReviewFeedback reviews={reviewFake} />
                            <p className='srd__see__all' to="#">See all 164 reviews</p>
                        </div>
                        <div className='srd__amenities'>
                            <h4>Popular amenities</h4>
                            <ul className='srd__amenities__list'>
                                {amenities?.map((amenity, idx) => (
                                    <li key={idx} className='srd__amenities__item'>
                                        <Amenity title={amenity} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='srd__near__location col-lg-4'>
                        <h4>What's around</h4>
                        <SimpleMap />
                        <ul className='srd__near__location__list'>
                            <li className='srd__near__location__item'>
                                <div className='srd__nl__name'>
                                    <LocationIcon fill='#0171c2' width='14px' height='14px' />
                                    <p>Hai Phong Museum</p>
                                </div>
                                <p className='srd__nl__time__drive'>4 min drive</p>
                            </li>
                            <li className='srd__near__location__item'>
                                <div className='srd__nl__name'>
                                    <LocationIcon fill='#0171c2' width='14px' height='14px' />
                                    <p>Hai Phong Opera House</p>
                                </div>
                                <p className='srd__nl__time__drive'>5 min drive</p>
                            </li>
                            <li className='srd__near__location__item'>
                                <div className='srd__nl__name'>
                                    <LocationIcon fill='#0171c2' width='14px' height='14px' />
                                    <p>Aeon mall le chau hai phong</p>
                                </div>
                                <p className='srd__nl__time__drive'>6 min drive</p>
                            </li>
                        </ul>
                        <p className='srd__see__all' to="#">See all</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultDetail
