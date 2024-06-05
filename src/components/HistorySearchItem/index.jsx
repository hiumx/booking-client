import React from 'react'
import "./_history_search_item.scss";
import { ClockRotateLeftIcon } from '../Icons';
import PropTypes from 'prop-types';


const HistorySearchItem = ({ hotelName, startDate, endDate, numberTravelers, numberRoom }) => {
    return (
        <div className='hsi__wrapper'>
            <div>
                <ClockRotateLeftIcon width='18px' height='18px' fill='#666666'/>
            </div>
            <div className='hsi__desc'>
                <h6>Stays in Paradise Valley</h6>
                <p>{`${"Wed, Jun 18"} - ${"Sat, Jun 21"}`}</p>
                <p>{`${2} travelers · ${1} room`}</p>
            </div>
        </div>
    )
}

HistorySearchItem.propTypes = {
    hotelName: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    numberTravelers: PropTypes.number,
    numberRoom: PropTypes.number
}

export default HistorySearchItem
