import React, { useEffect, useState } from 'react'
import "./_admin_post_management.scss";
import ManagerDefaultLayout from '~/pages/System/layouts/ManagerDefaultLayout';
import { confirmAPost, getAllPosts } from '~/services/post.service';
import { ToastContainer, toast } from 'react-toastify';

const AdminPostManagement = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts()
            .then(res => {
                if (res.code === 1000)
                    setPosts(res.metadata);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    const handleConfirmPost = pid => {
        confirmAPost(pid)
            .then(res => {
                if (res.code === 1000) {
                    toast.success(res.message);
                    getAllPosts()
                        .then(res => {
                            if (res.code === 1000)
                                setPosts(res.metadata);
                        })
                        .catch(err => {
                            console.error(err);
                        })
                }
            }).catch(err => {
                console.error(err);
            })
    }

    return (
        <div className='hotel__manage__wrapper'>
            <ManagerDefaultLayout listItem={["Users", "Hotels", "Posts"]} logoTitle="Admin">
                <h4 className='hotel__manage__title'>Post management</h4>
                <div className='hotel__manage__table'>
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
                                            <td><button className='btn btn-info' onClick={() => handleConfirmPost(p?.id)}>Confirm</button></td>
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
            </ManagerDefaultLayout>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                style={{ fontSize: '14px' }}
            />
        </div>
    )
}

export default AdminPostManagement