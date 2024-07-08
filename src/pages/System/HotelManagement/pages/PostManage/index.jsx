import React from 'react'
import ManagerDefaultLayout from '../../../layouts/ManagerDefaultLayout'

const PostManage = () => {
    return (
        <div>
            <ManagerDefaultLayout listItem={["Hotels", "Rooms", "Bookings", "Posts"]}>
                <div>Post Manage</div>
            </ManagerDefaultLayout>
        </div>
    )
}

export default PostManage