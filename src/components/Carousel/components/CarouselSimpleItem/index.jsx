import React, { useState } from 'react'
import "./_carousel_single_item.scss";
import LazyLoad from 'react-lazyload';
import ReviewFeedback from '~/components/ReviewFeedback';
import PropTypes from 'prop-types';
import { HeartIcon, HeartSolidIcon } from '~/components/Icons';


const CarouselSimpleItem = ({
    imgSrc,
    name = "",
    location = "",
    isReview = true,
    isSave = true,
    isLocation = true
}) => {

    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className='csi__wrapper'>
            <div className='csi__img__wrapper'>
                <LazyLoad height="118px">
                    <img className='csi__img' src={imgSrc} alt='ssi-img' />
                </LazyLoad>
                {isSave &&
                    <div className='csi__save' onClick={() => setIsSaved(!isSaved)}>
                        {!isSaved ? <HeartIcon fill='#7e26a9' /> : <HeartSolidIcon fill='#e55050' />}
                    </div>
                }
            </div>
            <div className='csi__info__wrapper'>
                <div className='csi__info'>
                    <h5 className='csi__info__name'>{name}</h5>
                    {isLocation &&
                        <p className='csi__info__location'>{location}</p>
                    }
                </div>

                {isReview &&
                    <div className='csi__review__wrapper'>
                        <ReviewFeedback reviews={[{ point: 10 }]} style={{ fontSize: '14px' }} />
                    </div>
                }
            </div>
        </div>
    )
}

CarouselSimpleItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    isReview: PropTypes.bool,
    isSave: PropTypes.bool,
}

export default CarouselSimpleItem
