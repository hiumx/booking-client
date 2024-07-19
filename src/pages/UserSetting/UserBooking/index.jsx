import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./_user_booking.scss";
import AuthLayout from '~/layouts/AuthLayout';
import SubFooter from '~/layouts/components/SubFooter';
import { cancelBooking, getBookingByUser } from '~/services/booking.service';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const UserBooking = () => {

    const user = useSelector(state => state.user.userMyInfo);
    const [bookings, setBookings] = useState([]);
    const [state, setState] = useState(0);

    useEffect(() => {
        if (user?.id) {
            getBookingByUser(user.id)
                .then(res => {
                    if (res.code === 1000) {
                        setBookings(res?.metadata);
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }, [state]);

    const handleClickCancel = (id) => {
        if(window.confirm("Are you sure to delete this booking?")) {
            cancelBooking(id)
                .then(res => {
                    if(res.code === 1000) {
                        setState(state + 1);
                        toast.success("Delete booking successfully");
                    }
                }).catch(err => {
                    console.error(err);
                })
        }
    }

    console.log(bookings);

    return (
        <div>
            <AuthLayout>
                <div className='my__setting__wrapper'>
                    <div className='my__setting__title'>
                        <h2>My bookings</h2>
                        <p>Manage your Booking experience</p>
                    </div>
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Number of People</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings?.map((b, idx) => (
                                <tr>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{b.roomResponses.map(r => r.name).join(", ")}</td>
                                    <td>{b.numberAdult}</td>
                                    <td>{b.startDate}</td>
                                    <td>{b.endDate}</td>
                                    <td>
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => handleClickCancel(b.id)}
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* <SubFooter /> */}
            </AuthLayout>
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
                style={{fontSize: '14px'}}
            />
        </div>
    )
}

export default UserBooking