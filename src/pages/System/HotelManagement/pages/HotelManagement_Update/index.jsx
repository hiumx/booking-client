import React from 'react';
import "./_hotel_management_update.scss";
import Sidebar from '~/pages/System/components/Sidebar/Sidebar';
import UpdateHotel from '../../component/Update_Hotel';


const HotelManagement_Update = () => {
  return (
    <div className="hotel-management">
      <Sidebar listItem={["Hotels"]}/>
      <div className="content">
        <UpdateHotel/>
      </div>
    </div>
  )
}

export default HotelManagement_Update;
