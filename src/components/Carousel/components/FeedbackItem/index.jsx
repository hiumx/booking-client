import React from 'react'
import "./_feedback_item.scss";
import PropTypes from 'prop-types';

import SeeMore from '~/components/SeeMore';
import vnFlag from "~/assets/images/vn.png";

const FeedbackItem = ({ avatarSrc, name, content }) => {
    return (
        <div className='feedback__item__wrapper'>
            <div className='feedback__item__user'>
                <img className='feedback__item__user__img' src={avatarSrc} alt='avatar-img' />
                <div className='feedback__item__user__detail'>
                    <h6 className='feedback__item__user__name'>{name}</h6>
                    <div className='feedback__item__desc'>
                        <img src={vnFlag} className='feedback__item__flag' alt='vn-flag-img' />
                        <p className='feedback__item__user__country'>Viet Nam</p>
                    </div>
                </div>
            </div>
            <p className='feedback__item__content'>{`"${content}"`}</p>
            <SeeMore text="Read more" />
        </div>
    )
}

FeedbackItem.propTypes = {
    avatarSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default FeedbackItem
