import React from 'react'
import "./_amenity.scss";
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '~/utils';
import {
    AirConditioningIcon, AirportShuttleIcon, AirportTransferIcon,
    BarIcon, BreakFastIcon, BreakfastIcon, BusinessCenterIcon, CarIcon, ElevatorIcon, FamilyRoomIcon, FanIcon, HandShakeIcon, LaundryIcon, NoSmokingIcon, PetIcon, PoolIcon,
    ReceptionistIcon,
    RestaurantIcon, RoomServiceIcon, SpaIcon, SportCenterIcon, SuitCaseRollingIcon, WifiIcon
} from '~/components/Icons';

const iconMap = {
    FreeWiFiIcon: WifiIcon,
    SwimmingPoolIcon: PoolIcon,
    SpaIcon,
    AirConditioningIcon: FanIcon,
    AirportTransferIcon,
    FreeParkingIcon: CarIcon,
    BarIcon,
    GymIcon: SportCenterIcon,
    ElevatorIcon,
    BreakfastIncludedIcon: BreakfastIcon,
    RestaurantIcon,
    AirportShuttleIcon,
    RoomServiceIcon,
    PetFriendlyIcon: PetIcon,
    LaundryServiceIcon: LaundryIcon,
    "24-hourFrontDeskIcon": ReceptionistIcon,
    "Non-smokingRoomsIcon": NoSmokingIcon,
    FamilyRoomsIcon: FamilyRoomIcon,
    "MeetingFacilitiesIcon": HandShakeIcon,
    LuggageStorageIcon: SuitCaseRollingIcon,
    BusinessCenterIcon
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
            <p style={{ ...titleStyle }}>{title}</p>
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
