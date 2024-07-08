import React from 'react'
import ManagerDefaultLayout from '../../../layouts/ManagerDefaultLayout'

const BookingManage = () => {
    return (
        <ManagerDefaultLayout listItem={["Hotels", "Rooms", "Bookings", "Posts"]}>
            <div>BookingManage</div>
        </ManagerDefaultLayout>
    )
}

export default BookingManage