import React from 'react'
import "./_hotel_manager_default_layout.scss";
import PropTypes from 'prop-types';
import Sidebar from '~/pages/System/components/Sidebar/Sidebar';
import NavbarSystem from '~/pages/System/components/NavbarSystem/NavbarSystem';

const ManagerDefaultLayout = ({ listItem = [], children, logoTitle }) => {
    return (
        <div>
            <div className="home">
                <Sidebar listItem={listItem} logoTitle={logoTitle} />
                <div className="homeContainer">
                    {/* <NavbarSystem /> */}
                    {children}
                </div>
            </div>
        </div>
    )
}

ManagerDefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default ManagerDefaultLayout