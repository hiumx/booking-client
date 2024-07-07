import React from 'react';
import "./_hotel_management.scss";
import Sidebar from '~/pages/System/components/Sidebar/Sidebar';
import ListItem from '../../component/List_Hotel';
import NavbarSystem from '~/pages/System/components/NavbarSystem/NavbarSystem';

const HotelManagement = () => {
  return (
    <div className="hotel-management">
      <Sidebar listItem={["Hotels", "Create_Hotel"]}/>
      <div className="content">
        <NavbarSystem/>
        <ListItem/>
      </div>
    </div>
  )
}

export default HotelManagement;
