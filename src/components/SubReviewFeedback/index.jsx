import React from 'react'
import "./_sub_review_feedback.scss";

const SubReviewFeedback = () => {
    const point = 9.4;
    return (
        <div className='sub__review__feedback__wrapper'>
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
                <span className='srf__num__reviews'>3,337 reviews</span>
            </div>
        </div>
    )
}

export default SubReviewFeedback