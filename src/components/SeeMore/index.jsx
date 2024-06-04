import React from 'react'
import "./_see_more.scss";
import { ChevronRightIcon } from '../Icons';

const SeeMore = ({ text }) => {
    return (
        <div className='see__more__wrapper'>
            <p className='see__more__all' to="#">{text}</p>
            <ChevronRightIcon fill='#1568e3' height='11px' width='11px'/>
        </div>
    )
}

export default SeeMore
