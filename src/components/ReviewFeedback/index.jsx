import React from 'react'
import "./_review_feedback.scss";
import { mapToNameFromScore } from '~/utils';
import PropTypes from 'prop-types';

const ReviewFeedback = ({ reviews = [], style = {} }) => {

    const point = (reviews.reduce((acc, review) => acc + review.point, 0) / reviews?.length).toFixed(1);
    const totalReviews = reviews?.length;

    return (
        <div className='review__feedback__wrapper'>
            <div>
                <p className='review__feedback__evaluate__exceptional' style={{...style}}>{mapToNameFromScore(point)}</p>
                {totalReviews !== 0 &&
                    <p className='review__feedback__evaluate__num__review'>
                        {totalReviews === 1
                            ? "1 review"
                            : `${totalReviews} reviews`
                        }
                    </p>
                }
            </div>
            <button className='review__feedback__evaluate__point__btn'>
                {
                    point % 1 === 0
                        || point % 1 === 1
                        || point % 1 === 2
                        || point % 1 === 3
                        || point % 1 === 4
                        ? Number(point).toFixed(0)
                        : point}
            </button>
        </div>
    )
}

ReviewFeedback.propTypes = {
    reviews: PropTypes.array.isRequired,
    style: PropTypes.object
}

export default ReviewFeedback
