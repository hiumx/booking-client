import React from 'react'
import "./_hotel_overview.scss";
import LazyLoad from 'react-lazyload';
import ReactStars from 'react-stars';
import SubReviewFeedback from '../SubReviewFeedback';
import { DistanceIcon, LocationIcon, XmarkIcon } from '../Icons';
import RoomOverviewInfo from '../RoomOverviewInfo';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const HotelOverview = ({ srcImg, hotelId, hotelName, hotelLocation, rate, fromCenter, reviews, roomPrice, handleClickRemoveSaveHotel }) => {

    const navigator = useNavigate();
    const handleClickHotelSave = () => {
        const startDate = new Date(Date.now());
        const endDate = new Date(startDate + 1000 * 3600 * 24 * 2);
        const adult = 2;
        const children = 0;
        const rooms = 1;
        navigator(`/search-result/${hotelId}?location=${hotelName}&startDate=${startDate}&endDate=${endDate}&adult=${adult}&children=${children}&room=${rooms}`)
    }

    return (
        <div className='hotel__overview__wrapper' onClick={handleClickHotelSave}>
            <LazyLoad height="290px">
                <img src={srcImg} alt='iti-img' className='hotel__overview_img' />
            </LazyLoad>
            <div className='hotel__overview__content'>
                <ReactStars
                    count={5}
                    edit={false}
                    size={16}
                    value={rate}
                    color2={'#ffd700'}
                />
                <h5 className='hotel__overview__title'>{hotelName}</h5>
                <SubReviewFeedback style={{ margin: '4px 0' }} reviews={reviews} />
                <div className='hotel__overview__item'>
                    <LocationIcon fill='#006ce4' />
                    <p>{hotelLocation}</p>
                </div>
                <div className='hotel__overview__item'>
                    <DistanceIcon fill='#006ce4' />
                    <p>{`${fromCenter} km from center`}</p>
                </div>
                <div>
                    <RoomOverviewInfo
                        price={roomPrice}
                    />
                </div>
            </div>
            <div className='hotel__overview__remove__btn' onClick={handleClickRemoveSaveHotel}>
                <XmarkIcon />
            </div>
        </div>
    )
}

HotelOverview.propTypes = {
    srcImg: PropTypes.string.isRequired,
    hotelName: PropTypes.string.isRequired,
    hotelLocation: PropTypes.string.isRequired,
    fromCenter: PropTypes.number.isRequired,
    reviews: PropTypes.array.isRequired,
    roomPrice: PropTypes.number.isRequired,
}

export default HotelOverview