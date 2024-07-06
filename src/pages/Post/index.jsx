import React from 'react'
import "./_post.scss";
import DefaultLayout from '~/layouts/DefaultLayout';
import Carousel from '~/components/Carousel';

const Post = () => {
  return (
    <DefaultLayout>
        <div>
            <Carousel 
                type='post-item-component'
                slidesToShow={3}
                slidesToScroll={1}
            />
        </div>
    </DefaultLayout>
  )
}

export default Post