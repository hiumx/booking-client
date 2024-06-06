import React, { useState } from 'react'
import "./_carousel_single_item.scss";
import LazyLoad from 'react-lazyload';
import ReviewFeedback from '~/components/ReviewFeedback';
import PropTypes from 'prop-types';
import { HeartIcon, HeartSolidIcon } from '~/components/Icons';


const SimpleItem = ({
    imgSrc,
    name = "",
    location = "",
    isReview = true,
    isSave = true,
    isLocation = true,
    isBackground = false
}) => {

    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className={isBackground ? 'csi__wrapper csi__background__image' : 'csi__wrapper'}>
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
                            reviews={[{ point: 10 }]}
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
    isSave: PropTypes.bool,
}

export default SimpleItem
