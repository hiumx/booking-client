import React from 'react'
import Sidebar from '~/pages/System/components/Sidebar/Sidebar'
import ManagerDefaultLayout from '~/pages/System/layouts/ManagerDefaultLayout'

const AdminUserManagement = () => {
    return (
        <div className='hotel__manage__wrapper'>
            <ManagerDefaultLayout listItem={["Users", "Hotels", "Posts"]} logoTitle="Admin">
                <h4 className='hotel__manage__title'>User management</h4>
                <div className='hotel__manage__table'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
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
                                <td>John Doe</td>
                                <td>john.doe@example.com</td>
                                <td>(123) 456-7890</td>
                                <td>123 Main St, New York, NY</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jane Smith</td>
                                <td>jane.smith@example.com</td>
                                <td>(987) 654-3210</td>
                                <td>456 Elm St, Los Angeles, CA</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Michael Brown</td>
                                <td>michael.brown@example.com</td>
                                <td>(555) 123-4567</td>
                                <td>789 Oak St, Chicago, IL</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Emily Johnson</td>
                                <td>emily.johnson@example.com</td>
                                <td>(444) 987-6543</td>
                                <td>101 Pine St, Houston, TX</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>David Lee</td>
                                <td>david.lee@example.com</td>
                                <td>(333) 456-7890</td>
                                <td>202 Maple St, Phoenix, AZ</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Sarah Davis</td>
                                <td>sarah.davis@example.com</td>
                                <td>(222) 654-3210</td>
                                <td>303 Cedar St, Philadelphia, PA</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>James Wilson</td>
                                <td>james.wilson@example.com</td>
                                <td>(111) 123-4567</td>
                                <td>404 Birch St, San Antonio, TX</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Olivia Martinez</td>
                                <td>olivia.martinez@example.com</td>
                                <td>(999) 987-6543</td>
                                <td>505 Aspen St, San Diego, CA</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>William Taylor</td>
                                <td>william.taylor@example.com</td>
                                <td>(888) 456-7890</td>
                                <td>606 Redwood St, Dallas, TX</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Ava White</td>
                                <td>ava.white@example.com</td>
                                <td>(777) 654-3210</td>
                                <td>707 Walnut St, San Jose, CA</td>
                                <td><button className='btn btn-danger'>Block</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ManagerDefaultLayout>
        </div>
    )
}

export default AdminUserManagement