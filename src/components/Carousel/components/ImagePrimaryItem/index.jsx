import React from 'react'
import "./_image_primary_item.scss";
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { getResultSearchHotel } from '~/store/actions/hotel.action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ImagePrimaryItem = ({image, province, properties = 100 }) => {

    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleClickItem = () => {
        const payload = {
            location: province,
            startDate: new Date(Date.now()),
            endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
            options: {
                adult: 2,
                children: 0,
                room: 1,
            }
        }

        navigator(
            `/search-result?location=${payload.location}&startDate=${payload.startDate}&endDate=${payload.endDate}&adult=${payload.options.adult}&children=${payload.options.children}&room=${payload.options.room}`
        );
        dispatch(getResultSearchHotel(payload));

    }

    return (
        <div className='image__primary__item__wrapper' onClick={handleClickItem}>
            <LazyLoad height="302px">
                <img src={image} className='carousel__item__img' alt={`item-img`} loading='lazy' />
                <div className='carousel__item__detail'>
                    <h6 className='carousel__item__name'>{province}</h6>
                    <p className='carousel__item__desc'>{`${properties} properties`}</p>
                </div>
            </LazyLoad>
        </div>
    )
}

ImagePrimaryItem.propTypes = {
    image: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    properties: PropTypes.number.isRequired
}

export default ImagePrimaryItem