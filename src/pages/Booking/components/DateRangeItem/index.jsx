import React from 'react'
import "./_date_range_item.scss";
import PropTypes from 'prop-types';

const DateRangeItem = ({
    title,
    date,
    fromHour,
    untilHour,
    isSeparate = false
}) => {
    return (
        <div className={isSeparate ? 'date__range__item__wrapper dri__separate__wrapper' : 'date__range__item__wrapper'}>
            <p className='date__range__item__title'>{title}</p>
            <div className='date__range__item__time'>
                <h6 className='date__range__item__date'>{date}</h6>
                <p className='date__range__item__hour'>{fromHour ? `From ${fromHour}` : `Until ${untilHour}`}</p>
            </div>
        </div>
    )
}

DateRangeItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    fromHour: PropTypes.string,
    untilHour: PropTypes.string,
    isSeparate: PropTypes.bool
}

export default DateRangeItem