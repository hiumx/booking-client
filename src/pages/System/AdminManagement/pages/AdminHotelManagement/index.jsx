import React from 'react'
import "./_admin_hotel_management.scss";
import ManagerDefaultLayout from '~/pages/System/layouts/ManagerDefaultLayout';

const AdminHotelManagement = () => {
    return (
        <div className='hotel__manage__wrapper'>
            <ManagerDefaultLayout listItem={["Users", "Hotels", "Posts"]} logoTitle="Admin">
                <h4 className='hotel__manage__title'>Hotel management</h4>
                <div className='hotel__manage__table'>
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
                            {/* {hotels?.map((h, idx) => (
                                <tr>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{h.name}</td>
                                    <td>{h.location}</td>
                                    <td>
                                        <button className='btn btn-info'>View rooms</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-secondary'>View bookings</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-success'>View posts</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-primary'>Update</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))} */}
                            <tr>
                                <td>1</td>
                                <td>Grand Palace Hotel</td>
                                <td>New York, USA</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Sunset Beach Resort</td>
                                <td>Miami, USA</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Mountain View Inn</td>
                                <td>Denver, USA</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Royal Garden Hotel</td>
                                <td>London, UK</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Oceanfront Suites</td>
                                <td>Sydney, Australia</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>City Lights Hotel</td>
                                <td>Tokyo, Japan</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Tropical Paradise Resort</td>
                                <td>Honolulu, USA</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Elegant Stay Hotel</td>
                                <td>Paris, France</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Desert Oasis Inn</td>
                                <td>Dubai, UAE</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Green Valley Lodge</td>
                                <td>Vancouver, Canada</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ManagerDefaultLayout>
        </div>
    )
}

export default AdminHotelManagement