import React from 'react'
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import "./_image_text_item.scss";
import { Link } from 'react-router-dom';

const ImageTextItem = ({ imgSrc, type = "Text" }) => {
    const link = `/search-result?location=san?startDate=${new Date(Date.now())}&endDate=${new Date(Date.now() + 1000 * 60 * 60 * 24)}&adult=2&children=0&room=1&checked=${type}`
    console.log(link);
    return (
        <Link to={link} className='image__text__item__wrapper'>
            <LazyLoad height="290px">
                <img src={imgSrc} alt='iti-img' className='iti__img' />
                <p className='iti__text'>{type}</p>
            </LazyLoad>
        </Link>
    )
}

ImageTextItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default ImageTextItem
