import React, { useEffect } from 'react'
import "./_hotel_manage.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getHotelsByManagerId } from '~/store/actions/hotel.action';
import { getHotelByManagerId } from '~/services/hotel.service';
import ManagerDefaultLayout from '../../../layouts/ManagerDefaultLayout';
import { Link } from 'react-router-dom';

const HotelManage = () => {

    const hotels = useSelector(state => state.hotel.hotelsByManager);
    const user = useSelector(state => state.user.userMyInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotelsByManagerId(user.id));
    }, []);

    return (
        <div className='hotel__manage__wrapper'>
            <ManagerDefaultLayout listItem={["Hotels", "Rooms", "Bookings", "Posts"]}>
                <div className='hotel__manage__table'>
                    <Link to="create" className='btn btn-primary mb-3'>Create new hotel</Link>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Location</th>
                                <th scope="col" colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hotels.map((h, idx) => (
                                <tr>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{h.name}</td>
                                    <td>{h.location}</td>
                                    <td>
                                        <button className='btn btn-info'>View details</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-primary'>Update</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </ManagerDefaultLayout>
        </div>
    )
}

export default HotelManage