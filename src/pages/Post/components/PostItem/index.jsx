import React from 'react'
import "./_post_item.scss";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostItem = ({ title, posts = [] }) => {
    return (
        <div className='post__item__wrapper'>
            <h3 className='post__item__title'>{title}</h3>
            <ul className='post__item__post__list'>
                {posts?.map((p, idx) => (
                    <li key={idx} className='post__item__post__item'>
                        <Link to={`${p?.id}`}>
                            <img
                                className='post__item__img'
                                src={p?.image}
                                alt='post-img'
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

PostItem.propTypes = {
    title: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
}

export default PostItem