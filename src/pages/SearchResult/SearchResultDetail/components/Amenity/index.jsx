import React from 'react'
import "./_amenity.scss";
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '~/utils';
import { AirConditioningIcon, AirportTransferIcon, BarIcon, CarIcon, PoolIcon, SpaIcon, WifiIcon } from '~/components/Icons';

const iconMap = {
    WifiIcon,
    PoolIcon,
    SpaIcon,
    AirConditioningIcon,
    AirportTransferIcon,
    FreeParkingIcon: CarIcon,
    BarIcon
};

const Amenity = ({ title }) => {
    const items = title.split(" ");
    let IconElement = "";
    items.forEach(item => {
        IconElement += capitalizeFirstLetter(item);
    });
    IconElement += "Icon";
    const IconComponent = iconMap[IconElement];
    console.log(IconElement);
    return (
        <div className='amenity__wrapper'>
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
    title: PropTypes.string.isRequired
}

export default Amenity
