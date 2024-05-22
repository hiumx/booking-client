import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isRoleExist } from '~/utils';

const HotelManagement = () => {
    const navigator = useNavigate();
    const user = useSelector(state => state.user.userMyInfo);

    const isAdmin = isRoleExist(user.roles, "Admin");
    const isHotelManager = isRoleExist(user.roles, "Hotel manager");

    useEffect(() => {
      if(!isHotelManager) {
        navigator("/");
      }
    }, [])
  
  return (
    <div>
      Page of hotel manager
    </div>
  )
}

export default HotelManagement
