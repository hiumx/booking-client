import React from 'react'
import "./_post.scss";
import DefaultLayout from '~/layouts/DefaultLayout';
import Carousel from '~/components/Carousel';

const Post = () => {
    return (
        <div className='post__wrapper'>
            <DefaultLayout>
                <div className='post__content'>
                    <Carousel
                        type='post-item-component'
                        slidesToShow={3}
                        slidesToScroll={1}
                        items={[1, 2, 3, 4, 5]}
                        title="What's News"
                    />
                    <Carousel
                        type='post-item-component'
                        slidesToShow={3}
                        slidesToScroll={1}
                        items={[1, 2, 3, 4, 5]}
                        title='Ads'
                        autoPlay
                    />
                    <Carousel
                        type='post-item-component'
                        slidesToShow={3}
                        slidesToScroll={1}
                        items={[1, 2, 3, 4, 5]}
                        title='Trip with low price'
                    />
                    <Carousel
                        type='post-item-component'
                        slidesToShow={3}
                        slidesToScroll={1}
                        items={[1, 2, 3, 4, 5]}
                        title='Trip with low price'
                    />
                </div>
            </DefaultLayout>
        </div>
    )
}

export default Post