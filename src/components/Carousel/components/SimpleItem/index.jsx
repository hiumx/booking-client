import React, { useState } from 'react'
import "./_carousel_single_item.scss";
import LazyLoad from 'react-lazyload';
import ReviewFeedback from '~/components/ReviewFeedback';
import PropTypes from 'prop-types';
import { HeartIcon, HeartSolidIcon } from '~/components/Icons';
import { filterHotelByChecked } from '~/services/search.service';
import { useDispatch } from 'react-redux';
import actionTypes from '~/store/actions/action.type';
import { useNavigate } from 'react-router-dom';


const SimpleItem = ({
    imgSrc,
    name = "",
    location = "",
    isReview = true,
    reviews = [],
    isSave = true,
    isLocation = true,
    isBackground = false
}) => {

    const [isSaved, setIsSaved] = useState(false);

    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleClickItem = () => {
        const payload = {
            location: "",
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
            `/search-result?name=${name}&location=${location}&startDate=${startDate}&endDate=${endDate}&adult=${options.adult}&children=${options.children}&room=${options.room}`
        );

        filterHotelByChecked({
            name,
            startDate,
            endDate,
            location,
            numberOfRoom: options.room,
            checksType: [],
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
        <div
            className={isBackground ? 'csi__wrapper csi__background__image' : 'csi__wrapper'}
        >
            <div className='csi__img__wrapper'>
                <LazyLoad height="118px">
                    <img
                        className='csi__img'
                        src={imgSrc}
                        alt='ssi-img'
                        onClick={handleClickItem}
                    />
                </LazyLoad>
                {isSave &&
                    <div className='csi__save' onClick={() => setIsSaved(!isSaved)}>
                        {!isSaved ? <HeartIcon fill='#7e26a9' /> : <HeartSolidIcon fill='#e55050' />}
                    </div>
                }
            </div>
            <div className='csi__info__wrapper' onClick={handleClickItem}>
                <div className='csi__info'>
                    <h5
                        className=
                        {isBackground
                            ? 'csi__info__name csi__info__name__background'
                            : 'csi__info__name'
                        }
                    >
                        {name}
                    </h5>
                    {isLocation &&
                        <p
                            className={isBackground
                                ? 'csi__info__location csi__info__location__background'
                                : 'csi__info__location'
                            }
                        >
                            {location}
                        </p>
                    }
                </div>

                {isReview &&
                    <div className='csi__review__wrapper'>
                        <ReviewFeedback
                            reviews={reviews.length > 0 ? reviews : [{ point: 10 }]}
                            style={{ fontSize: '14px' }}
                            isBackgroundImage={isBackground}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

SimpleItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    isReview: PropTypes.bool,
    reviews: PropTypes.array,
    isSave: PropTypes.bool,
}

export default SimpleItem
