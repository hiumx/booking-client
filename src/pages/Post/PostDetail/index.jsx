import React, { useEffect, useState } from 'react'
import "./_post_detail.scss";
import { getPostConfirmedById } from '~/services/post.service';
import { useParams } from 'react-router-dom';
import CommonLayout from '~/layouts/CommonLayout';
const PostDetail = () => {
    const { pid } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        getPostConfirmedById(pid)
            .then(res => {
                if (res.code === 1000)
                    setPost(res.metadata);
            }).catch(err => {
                console.error(err);
            })
    }, []);
    return (
        <CommonLayout>
            <div className='post__detail__wrapper'>
                {
                    <div dangerouslySetInnerHTML={{ __html: post?.contentHtml }}>

                    </div>
                }
            </div>
        </CommonLayout>
    )
}

export default PostDetail