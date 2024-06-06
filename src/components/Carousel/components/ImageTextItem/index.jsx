import React from 'react'
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import "./_image_text_item.scss";

const ImageTextItem = ({ imgSrc, text = "Text"}) => {
    return (
        <div className='image__text__item__wrapper'>
            <LazyLoad height="290px">
                <img src={imgSrc} alt='iti-img' className='iti__img' />
                <p className='iti__text'>{text}</p>
            </LazyLoad>
        </div>
    )
}

ImageTextItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default ImageTextItem
