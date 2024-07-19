import React from 'react'
import "./_room_overview_info.scss";
import PropTypes from 'prop-types';
import { Room } from '@mui/icons-material';

const RoomOverviewInfo = ({nights = 1, adults = 2, price = 100}) => {
    return (
        <div className='room__overview__info__wrapper'>
            <p className='roi__value__desc'>
                {`${nights} nights, ${adults} adults`}
            </p>
            <h3 className='roi__value__money'>{`US$${price}`}</h3>
            <p className='roi__value__desc'>Includes taxes and charges</p>
        </div>
    )
}

RoomOverviewInfo.propTypes = {
    nights: PropTypes.number.isRequired,
    adults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}

export default RoomOverviewInfo
