import React, { useEffect, useState } from 'react'
import ManagerDefaultLayout from '../../../layouts/ManagerDefaultLayout'
import { Link, useParams } from 'react-router-dom';
import "./_room_manage.scss";
import { getRoomByHotelId } from '~/services/room.service';

const RoomManage = () => {

    const [rooms, setRooms] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getRoomByHotelId(Number(id))
            .then(res => {
                if (res.code === 1000)
                    setRooms(res.metadata);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    return (
        <ManagerDefaultLayout listItem={["Hotels"]}>
            <div className='room__manage__wrapper'>
                <h4 className='room__manage__title'>Room management</h4>
                <div className='room__manage__table'>
                    <Link to="create" className='btn btn-primary mb-3'>Create new room</Link>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Number of beds</th>
                                <th scope="col">Price </th>
                                <th scope="col" colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms?.map((h, idx) => (
                                <tr>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{h.name}</td>
                                    <td>{h.numberBed}</td>
                                    <td>{h.price}</td>
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
            </div>
        </ManagerDefaultLayout>
    )
}

export default RoomManage