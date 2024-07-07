import React, { useEffect } from 'react'
import "./_hotel_management.scss";
import Sidebar from '../components/Sidebar/Sidebar'
import NavbarSystem from '../components/NavbarSystem/NavbarSystem'
import Widget from '../components/widget/Widget'
import Featured from '../components/Featured/Featured'
import Chart from '../components/Chart/Chart'
import TableList from '../components/TableList/TableList'

const HotelManagement = () => {
    // const navigator = useNavigate();
    // const user = useSelector(state => state.user.userMyInfo);

    // const isAdmin = isRoleExist(user.roles, "Admin");
    // const isHotelManager = isRoleExist(user.roles, "Hotel manager");

    // useEffect(() => {
    //     if (!isHotelManager) {
    //         navigator("/");
    //     }
    // }, [])

    return (
        <div className='home__mana__wrapper'>
            <div>
            <div className="home">
                <Sidebar listItem={["Hotels"]}/>
                <div className="homeContainer">
                    <NavbarSystem />
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
                </div>
            </div>
        </div>
        </div>
    )
}

export default HotelManagement
