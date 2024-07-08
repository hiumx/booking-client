import React, { useEffect } from 'react'
import "./_hotel_management.scss";
import Sidebar from '../components/Sidebar/Sidebar'
import NavbarSystem from '../components/NavbarSystem/NavbarSystem'
import Widget from '../components/widget/Widget'
import Featured from '../components/Featured/Featured'
import Chart from '../components/Chart/Chart'
import TableList from '../components/TableList/TableList'
import PropTypes from 'prop-types';
import ManagerDefaultLayout from '../layouts/ManagerDefaultLayout';

const HotelManagement = ({ children }) => {
    // const navigator = useNavigate();
    // const user = useSelector(state => state.user.userMyInfo);

    // const isAdmin = isRoleExist(user.roles, "Admin");
    // const isHotelManager = isRoleExist(user.roles, "Hotel manager");

    // useEffect(() => {
    //     if (!isHotelManager) {
    //       s  navigator("/");
    //     }
    // }, [])

    return (
        <div className='home__mana__wrapper'>
            <ManagerDefaultLayout listItem={["Hotels", "Rooms", "Bookings", "Posts"]}>
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <TableList />
                </div>
            </ManagerDefaultLayout>
        </div>
    )
}

HotelManagement.propTypes = {
    children: PropTypes.node
}

export default HotelManagement
