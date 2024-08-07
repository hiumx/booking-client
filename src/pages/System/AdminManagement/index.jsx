import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import NavbarSystem from '../components/NavbarSystem/NavbarSystem'
import Widget from '../components/widget/Widget'
import Featured from '../components/Featured/Featured'
import Chart from '../components/Chart/Chart'
import "./_admin_management.scss";
import TableList from '../components/TableList/TableList'
import ManagerDefaultLayout from '../layouts/ManagerDefaultLayout'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isRoleExist } from '~/utils'

const AdminManagement = () => {
    const navigator = useNavigate();
    const user = useSelector(state => state.user.userMyInfo);

    const isAdmin = isRoleExist(user.roles, "Admin");
    const isHotelManager = isRoleExist(user.roles, "Hotel manager");

    useEffect(() => {
        if (!isAdmin) {
            navigator("/");
        }
    }, []);
    
    return (
        <div>
            <ManagerDefaultLayout
                listItem={["Hotels", "Users", "Posts"]}
                logoTitle="Admin"
            >
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

export default AdminManagement
