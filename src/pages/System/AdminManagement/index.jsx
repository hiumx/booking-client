import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import NavbarSystem from '../components/NavbarSystem/NavbarSystem'
import Widget from '../components/widget/Widget'
import Featured from '../components/Featured/Featured'
import Chart from '../components/Chart/Chart'
import "./_admin_management.scss";
import TableList from '../components/TableList/TableList'

const AdminManagement = () => {
    return (
        <div>
            <div className="home">
                <Sidebar />
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
    )
}

export default AdminManagement
