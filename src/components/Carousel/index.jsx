import React from 'react'
import "./_carousel.scss";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from './components/CustomArrow';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import CarouselSimpleItem from './components/CarouselSimpleItem';

const Carousel = ({ type,
    title = "",
    description = "",
    items = [],
    autoPlay = false,
    slidesToShow = 4,
    slidesToScroll = 1,
    arrowStyle = {}
}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 450,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        initialSlide: slidesToShow,
        prevArrow: <SamplePrevArrow style={arrowStyle} />,
        nextArrow: <SampleNextArrow style={arrowStyle} />,
        autoplay: autoPlay,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    };

    return (
        <div className='carousel__wrapper'>
            <div className='carousel__header'>
                {title && <h3 className='carousel__title'>{title}</h3>}
                {description && <p className='carousel__desc'>{description}</p>}
            </div>

            <Slider {...settings}>
                {type === "image-only" &&
                    items.map((item, idx) => (
                        <div key={idx} className='carousel__item'>
                            <LazyLoad height="302px">
                                <img src={item} className='carousel__item__img' alt={`img-${idx}`} loading='lazy' />
                            </LazyLoad>
                        </div>
                    ))
                }
                {type === "image-title-desc" &&
                    items.map((item, idx) => (
                        <div key={idx} className='carousel__item'>
                            <LazyLoad height="302px">
                                <img src={item.img} className='carousel__item__img' alt={`img-${idx}`} loading='lazy' />
                                <div className='carousel__item__detail'>
                                    <h6 className='carousel__item__name'>{item.name}</h6>
                                    <p className='carousel__item__desc'>{item.properties}</p>
                                </div>
                            </LazyLoad>
                        </div>
                    ))
                }
                {type === "image-simple-component" &&
                    items.map((item, idx) => (
                        <div key={item} className='carousel__item'>
                            <CarouselSimpleItem 
                                imgSrc={item.imgSrc}
                                name={item.name}
                                location={item.location}
                                isReview={item.isReview}
                                isSave={item.isSave}
                            />
                        </div>
                    ))
                }


            </Slider>
        </div>
    )
}

Carousel.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    items: PropTypes.array.isRequired
}

export default Carousel
