import React, { useEffect, useState } from 'react'
import "./_sub_nav.scss";
import { ArrowLeftIcon, HeartIcon, HeartSolidIcon, ShareIcon } from '../Icons';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkObjEmpty } from '~/utils';
import PropTypes from 'prop-types';
import { getHotelWishList, takeHotelWishList } from '~/store/actions/user.action';

const SubNav = ({ hotelName, query }) => {
    const [isSaved, setIsSaved] = useState(false);

    const navigator = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector(state => state.user.userMyInfo);
    const [wishListIds, setWishListIds] = useState([]);

    const { hotelResponses } = useSelector(state => state.user.hotelWishList);

    const handleClickSave = (type) => {
        if (type === "slight" && checkObjEmpty(user))
            navigator("/auth/sign-in");
        else {
            setIsSaved(!isSaved);
            dispatch(takeHotelWishList({
                userId: user?.id,
                hotelId: Number(id)
            }));

            if(type === "solid") {
                setWishListIds([...wishListIds?.filter(h => h !== Number(id))]);
                console.log("Solid: ", wishListIds);
            } else if (type === "slight"){
                setWishListIds([...wishListIds, Number(id)]);
                console.log(wishListIds);
                console.log("Slight: ", wishListIds);

            }

        }
    }

    useEffect(() => {
        if(user?.id) {
            dispatch(getHotelWishList(user?.id));
        }
    }, []);

    useEffect(() => {
        setWishListIds(hotelResponses?.map(h => h.id));        
    }, [hotelResponses])

    useEffect(() => {
        setIsSaved(wishListIds?.includes(Number(id)));
    }, [wishListIds]);

    return (
        <div className='sub__nav__wrapper'>
            <div className='sub__nav__hotel__name'>
                <button className='sub__nav__back__btn' onClick={() => navigator(`/search-result${query}`)}>
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
    hotelName: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired
}

export default SubNav
