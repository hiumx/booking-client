import React from 'react'
import "./_sub_review_feedback.scss";

const SubReviewFeedback = ({ reviews = [{ point: 10 }], style = {} }) => {
    const point = (reviews.reduce((acc, review) => acc + review.point, 0) / reviews?.length).toFixed(1);
    return (
        <div className='sub__review__feedback__wrapper' style={style}>
            <button
                className="srf__evaluate__point__btn"
            >
                {
                    point % 1 === 0
                        || point % 1 === 1
                        || point % 1 === 2
                        || point % 1 === 3
                        || point % 1 === 4
                        ? Number(point).toFixed(0)
                        : point}
            </button>
            <div className='srf__desc'>
                <span className='srf__title'>Very good</span>
                ·
                <span className='srf__num__reviews'>{`${reviews.length} reviews`}</span>
            </div>
        </div>
    )
}

export default SubReviewFeedback