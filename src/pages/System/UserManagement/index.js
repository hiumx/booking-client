import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { isRoleExist } from '~/utils';

const UserManagement = () => {

    const user = useSelector(state => state.user.userMyInfo);
    const navigator = useNavigate();

    const isAdmin = isRoleExist(user.roles, "Admin");

    useEffect(() => {
        if (!isAdmin) {
            navigator("/");
        }
    }, []);

    return (
        <div>
            Page of administrator
        </div>
    )
}

export default UserManagement
