import React from 'react'
import "./_amenity.scss";
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '~/utils';
import { AirConditioningIcon, AirportTransferIcon, BarIcon, BreakFastIcon, BreakfastIcon, CarIcon, ElevatorIcon, PoolIcon, SpaIcon, SportCenterIcon, WifiIcon } from '~/components/Icons';

const iconMap = {
    WifiIcon,
    PoolIcon,
    SpaIcon,
    AirConditioningIcon,
    AirportTransferIcon,
    FreeParkingIcon: CarIcon,
    BarIcon,
    SportCenterIcon,
    ElevatorIcon,
    BreakfastIcon
};

const Amenity = ({ title, style = { padding: '4px 0' } }) => {
    const items = title.split(" ");
    let IconElement = "";
    items.forEach(item => {
        IconElement += capitalizeFirstLetter(item);
    });
    IconElement += "Icon";
    const IconComponent = iconMap[IconElement];
    console.log(IconElement);
    return (
        <div className='amenity__wrapper' style={style}>
            <div>
                {
                    IconComponent
                        ? <IconComponent fill="#008235" width="16px" height="16px" />
                        : null
                }
            </div>
            <p>{title}</p>
        </div>
    )
}

Amenity.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object
}

export default Amenity
