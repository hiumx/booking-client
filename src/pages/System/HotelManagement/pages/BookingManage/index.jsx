import React, { useEffect, useState } from 'react'
import ManagerDefaultLayout from '../../../layouts/ManagerDefaultLayout'
import "./_booking_manage.scss";
import { getBookingByHotel } from '~/services/booking.service';
import { useParams } from 'react-router-dom';

const BookingManage = () => {

    const [bookings, setBookings] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getBookingByHotel(Number(id))
            .then(res => {
                if (res.code === 1000) {
                    setBookings(res.metadata);
                }
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <ManagerDefaultLayout listItem={["Hotels"]}>
            <div className='booking__manage__wrapper'>
                <h4 className='booking__manage__title'>Booking management</h4>

                <div className='booking__manage__table'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Room</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Number people</th>
                                <th scope="col">Start date</th>
                                <th scope="col">End date</th>
                                <th scope="col">Price</th>
                                <th scope="col" colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings?.map((b, idx) => (
                                <tr>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{b.roomResponses?.[0].name}</td>
                                    <td>{b.user.email}</td>
                                    <td>{b.numberAdult + b.numberChildren}</td>
                                    <td>{b.startDate}</td>
                                    <td>{b.endDate}</td>
                                    <td>{b.roomResponses?.[0].price}</td>
                                    <td>
                                        <button className='btn btn-info'>View detail</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger'>Cancel</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ManagerDefaultLayout>
    )
}

export default BookingManage