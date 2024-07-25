import React, { useEffect, useState } from 'react'
import "./_post.scss";
import DefaultLayout from '~/layouts/DefaultLayout';
import Carousel from '~/components/Carousel';
import { getAllPosts, getPostsConfirmed } from '~/services/post.service';
import PostItem from './components/PostItem';

const Post = () => {

    const [posts, setPosts] = useState([]);

    const topTrendingPost = posts?.filter(p => p.typePost.id === 4);
    const travelStoryPost = posts?.filter(p => p.typePost.id === 3);
    const luxuryTravelPost = posts?.filter(p => p.typePost.id === 1);

    useEffect(() => {
        getPostsConfirmed()
            .then(res => {
                if (res.code === 1000)
                    setPosts(res.metadata)
            }).catch(err => {
                console.error(err);
            })
    }, []);

    console.log(posts);
    return (
        <div className='post__wrapper'>
            <DefaultLayout>
                <div className='post__content'>
                    {/* {
                        posts?.map((p, idx) => (
                            <PostItem key={idx} title={p.title} />
                        ))
                    } */}
                    {topTrendingPost.length > 0 &&
                        <PostItem title='Top Trending' posts={topTrendingPost} />
                    }
                    {luxuryTravelPost.length > 0 &&
                        <PostItem title='Luxury Travel' posts={luxuryTravelPost} />
                    }
                    {travelStoryPost.length > 0 &&
                        <PostItem title='Travel Story' posts={travelStoryPost} />
                    }
                </div>
            </DefaultLayout>
        </div>
    )
}

export default Post