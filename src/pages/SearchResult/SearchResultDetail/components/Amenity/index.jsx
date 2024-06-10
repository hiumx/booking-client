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

const Amenity = ({
    title,
    style = { padding: '4px 0' },
    iconWidth = "16px",
    titleStyle = {}
}) => {

    const items = title.split(" ");
    let IconElement = "";
    items.forEach(item => {
        IconElement += capitalizeFirstLetter(item);
    });
    IconElement += "Icon";
    const IconComponent = iconMap[IconElement];

    return (
        <div className='amenity__wrapper' style={style}>
            <div>
                {
                    IconComponent
                        ? <IconComponent fill="#008235" width={iconWidth} height={iconWidth} />
                        : null
                }
            </div>
            <p style={{...titleStyle}}>{title}</p>
        </div>
    )
}

Amenity.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
    titleStyle: PropTypes.object,
    iconWidth: PropTypes.string
}

export default Amenity
