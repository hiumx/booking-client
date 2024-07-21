import React, { useEffect, useState } from 'react'
import ManagerDefaultLayout from '../../../layouts/ManagerDefaultLayout'
import "./_post_manage.scss";
import { Link, useParams } from 'react-router-dom';
import { getPostsByHotel } from '~/services/post.service';
const PostManage = () => {
    const [posts, setPosts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getPostsByHotel(id)
            .then(res => {
                if (res.code === 1000)
                    setPosts(res.metadata);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    console.log(posts);

    return (
        <div>
            <ManagerDefaultLayout listItem={["Hotels"]}>
                <div className='post__manage__wrapper'>
                    <h4 className='post__manage__title'>Post management</h4>

                    <Link to="create" className='btn btn-primary mb-3 post__manage__create__link'>Create new post</Link>
                    <div className='post__manage__table'>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Hotel</th>
                                    <th scope="col">Type</th>
                                    <th scope="col" colSpan={2}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts?.map((p, idx) => (
                                        <tr>
                                            <td>{idx + 1}</td>
                                            <td>{p?.title}</td>
                                            <td>{p?.hotel?.manager?.email}</td>
                                            <td>{p?.hotel?.name}</td>
                                            <td>{p?.typePost?.name}</td>
                                            {!p?.confirm
                                                ?
                                                <td><button className='btn btn-info'>Confirm</button></td>
                                                :
                                                <td><button className='btn btn-warning'>Block</button></td>
                                            }
                                            <td><button className='btn btn-danger'>Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </ManagerDefaultLayout>
        </div>
    )
}

export default PostManage