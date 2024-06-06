import React, { useState } from 'react'
import "./_sub_nav.scss";
import { ArrowLeftIcon, HeartIcon, HeartSolidIcon, ShareIcon } from '../Icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkObjEmpty } from '~/utils';
import PropTypes from 'prop-types';

const SubNav = ({ hotelName }) => {
    const [isSaved, setIsSaved] = useState(false);

    const navigator = useNavigate();
    const user = useSelector(state => state.user.userMyInfo);

    const handleClickSave = (type) => {
        if (type === "slight" && checkObjEmpty(user))
            navigator("/auth/sign-in");
        else
            setIsSaved(!isSaved);
    }

    return (
        <div className='sub__nav__wrapper'>
            <div className='sub__nav__hotel__name'>
                <button className='sub__nav__back__btn' onClick={() => navigator("/search-result")}>
                    <ArrowLeftIcon height='14px' width='14px' fill='#0d4eaf' />
                </button>
                <h6>{hotelName}</h6>
            </div>
            <div className='sub__nav__share__save'>
                <div className='sub__nav__share'>
                    <ShareIcon width='20px' height='20px' fill='#0d4eaf' />
                </div>
                {!isSaved
                    ?
                    <div className='sub__nav__save__btn' onClick={() => handleClickSave("slight")}>
                        <HeartIcon width='18px' height='18px' fill='#e61e43' />
                        <span className='sub__nav__save__text'>Save</span>
                    </div>
                    :
                    <div className='sub__nav__save__btn' onClick={() => handleClickSave("solid")}>
                        <HeartSolidIcon width='18px' height='18px' fill='#e61e43' />
                        <span className='sub__nav__save__text'>Saved</span>
                    </div>
                }
            </div>
        </div>
    )
}

SubNav.propTypes = {
    hotelName: PropTypes.string.isRequired
}

export default SubNav
