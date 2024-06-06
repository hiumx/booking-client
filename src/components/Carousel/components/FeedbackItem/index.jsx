import React from 'react'
import "./_feedback_item.scss";
import SeeMore from '~/components/SeeMore';
import PropTypes from 'prop-types';

const FeedbackItem = ({ avatarSrc, name, content }) => {
    return (
        <div className='feedback__item__wrapper'>
            <div>
                <img src={avatarSrc} alt='avatar-img' />
                <div>
                    <h6>{name}</h6>
                    <p>United Kingdom</p>
                </div>
            </div>
            <p>{content}</p>
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
