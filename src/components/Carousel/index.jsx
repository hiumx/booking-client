import React from 'react'
import "./_carousel.scss";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from './components/CustomArrow';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import CarouselSimpleItem from './components/SimpleItem';
import ImageTextItem from './components/ImageTextItem';
import FeedbackItem from './components/FeedbackItem';
import ImagePrimaryItem from './components/ImagePrimaryItem';
import PostItem from './components/PostItem';

const Carousel = ({
    type,
    title = "",
    description = "",
    items = [],
    autoPlay = false,
    slidesToShow = 4,
    slidesToScroll = 1,
    arrowStyle = {},
    titleStyle = {},
    backgroundImage = false
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
        <div className={backgroundImage ? `carousel__wrapper background__image` : 'carousel__wrapper'}>
            <div className={backgroundImage ? 'carousel__header background__image__header' : 'carousel__header'}>
                {title &&
                    <h3
                        className={backgroundImage ? 'carousel__title background__image__title' : 'carousel__title'}
                        style={{ ...titleStyle }}
                    >
                        {title}
                    </h3>
                }
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
                            <ImagePrimaryItem
                                key={idx}
                                image={item.image}
                                province={item.provinceName}
                                properties={100}
                            />
                        </div>
                    ))
                }
                {type === "image-simple-component" &&
                    items.map((item, idx) => (
                        <div key={idx} className='carousel__item'>
                            <CarouselSimpleItem
                                imgSrc={item.imgSrc}
                                name={item.name}
                                location={item.location}
                                isReview={item.isReview}
                                reviews={item.reviews}
                                isSave={item.isSave}
                                isBackground={backgroundImage}
                            />
                        </div>
                    ))
                }
                {type === "image-text-component" &&
                    items.map((item, idx) => (
                        <div key={idx} className='carousel__item'>
                            <ImageTextItem
                                imgSrc={item.imgSrc}
                                type={item?.type}
                                typeId={item?.typeId}
                            />
                        </div>
                    ))
                }
                {type === "feedback-item-component" &&
                    items.map((item, idx) => (
                        <div key={idx} className='carousel__item'>
                            <FeedbackItem
                                avatarSrc={item?.user?.image}
                                name={item?.user?.name || item?.user?.email?.split("@")[0]}
                                content={item?.content}
                            />
                        </div>
                    ))
                }
                {type === "post-item-component" &&
                    items.map((item, idx) => (
                        <div key={idx} className='carousel__item'>
                            <PostItem
                            
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
