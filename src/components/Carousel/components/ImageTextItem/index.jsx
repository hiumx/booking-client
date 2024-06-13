import React from 'react'
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import "./_image_text_item.scss";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { filterHotelByChecked } from '~/services/search.service';
import actionTypes from '~/store/actions/action.type';

const ImageTextItem = ({ imgSrc, type = "Text", typeId }) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleClickItem = () => {
        const payload = {
            location: "quang",
            startDate: new Date(Date.now()),
            endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
            options: {
                adult: 2,
                children: 0,
                room: 1,
            }
        }
        const { startDate, endDate, location, options } = payload;

        navigator(
            `/search-result?location=${location}&startDate=${startDate}&endDate=${endDate}&adult=${options.adult}&children=${options.children}&room=${options.room}&typeChecked=${typeId}`
        );

		filterHotelByChecked({
		    startDate,
		    endDate,
		    location,
		    numberOfRoom: options.room,
		    checksType: [6],
		    checksConvenient: [],
			lowestPrice: 0,
			highestPrice: 1000,
			checkRating: [],
		}).then(res => {
		    if (res.code === 1000)
		        dispatch({
		            type: actionTypes.GET_LIST_SEARCH_HOTEL_SUCCESS,
		            listSearchHotel: res.metadata
		        });
		}).catch(error => {
		    console.error(error);
		});
    }

    return (
        <div className='image__text__item__wrapper' onClick={handleClickItem}>
            <LazyLoad height="290px">
                <img src={imgSrc} alt='iti-img' className='iti__img' />
                <p className='iti__text'>{type}</p>
            </LazyLoad>
        </div>
    )
}

ImageTextItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    typeId: PropTypes.number.isRequired,
}

export default ImageTextItem
