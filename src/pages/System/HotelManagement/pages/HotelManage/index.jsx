import React, { useEffect } from 'react'
import "./_hotel_manage.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getHotelsByManagerId } from '~/store/actions/hotel.action';
import { getHotelByManagerId } from '~/services/hotel.service';
import ManagerDefaultLayout from '../../../layouts/ManagerDefaultLayout';
import { Link, useNavigate } from 'react-router-dom';

const HotelManage = () => {

    const hotels = useSelector(state => state.hotel.hotelsByManager);
    const user = useSelector(state => state.user.userMyInfo);
    const dispatch = useDispatch();
    const navigator = useNavigate();


    useEffect(() => {
        dispatch(getHotelsByManagerId(user.id));
    }, []);

    const handleClickViewRoomDetails = hid => {
        navigator(`/system/hotel-manager/hotels/${hid}/rooms`)
    }

    const handleClickViewBookingDetails = hid => {
        navigator(`/system/hotel-manager/hotels/${hid}/bookings`)
    }

    const handleClickViewPostDetails = hid => {
        navigator(`/system/hotel-manager/hotels/${hid}/posts`)
    }

    const handleClickUpdateHotel = hid => {
        navigator(`/system/hotel-manager/hotels/${hid}/update`)
    }

    const handleClickDeleteHotel = (hid, hotelName) => {
        if(window.confirm(`Are you sure to delete hotel "${hotelName}" forever?`)) {
            
        }
    }

    return (
        <div className='hotel__manage__wrapper'>
            <ManagerDefaultLayout listItem={["Hotels"]}>
                <h4 className='hotel__manage__title'>Hotel management</h4>
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
                            {hotels?.map((h, idx) => (
                                <tr>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{h.name}</td>
                                    <td>{h.location}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => handleClickViewRoomDetails(h.id)}>View rooms</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-secondary' onClick={() => handleClickViewBookingDetails(h.id)}>View bookings</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-success' onClick={() => handleClickViewPostDetails(h.id)}>View posts</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => handleClickUpdateHotel(h.id)}>Update</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => handleClickDeleteHotel(h.id, h.name)}>Delete</button>
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