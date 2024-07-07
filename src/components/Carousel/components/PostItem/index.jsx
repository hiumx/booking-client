import React from 'react'
import "./_post_item.scss";
import LazyLoad from 'react-lazyload';

const PostItem = () => {
    return (
        <div className='post__item__wrapper'>
            {/* <LazyLoad height="290px"> */}
                <img src='https://dimg04.tripcdn.com/images/0a10s12000elvnjlr4BB2.jpg'
                    alt='post__item__img'
                    className='post__item__img'
                />
            {/* </LazyLoad> */}
        </div>
    )
}

export default PostItem