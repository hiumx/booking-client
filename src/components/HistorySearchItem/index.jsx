import React from 'react'
import "./_history_search_item.scss";
import { ClockRotateLeftIcon } from '../Icons';
import PropTypes from 'prop-types';
import { formatDate } from '~/utils';
import { Link } from 'react-router-dom';


const HistorySearchItem = ({ hotelId, hotelName, startDate, endDate, adult, children, rooms }) => {
    return (
        <Link
            className='hsi__wrapper'
            to={`/search-result/${hotelId}?location=${hotelName}&startDate=${startDate}&endDate=${endDate}&adult=${adult}&children=${children}&room=${rooms}`}
        >
            <div>
                <ClockRotateLeftIcon width='18px' height='18px' fill='#666666' />
            </div>
            <div className='hsi__desc'>
                <h6>{hotelName}</h6>
                <p>{`${formatDate(new Date(startDate))} - ${formatDate(new Date(endDate))}`}</p>
                {/* <p>{`${} - ${"Sat, Jun 21"}`}</p> */}
                <p>{`${Number(adult) + Number(children)} travelers · ${rooms} room`}</p>
            </div>
        </Link>
    )
}

HistorySearchItem.propTypes = {
    hotelName: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    travelers: PropTypes.number,
    rooms: PropTypes.number
}

export default HistorySearchItem
