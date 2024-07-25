import React, { useEffect, useState } from 'react'
import HotelOverview from '~/components/HotelOverview'
import CommonLayout from '~/layouts/CommonLayout'
import "./_user_save.scss";
import { HeartSolidIcon } from '~/components/Icons';
import { getHotelsSaveByUser, saveHotelByUser } from '~/services/user.service';
import { useDispatch, useSelector } from 'react-redux';
import HotelOverviewLoader from '~/components/MyLoader/components/HotelOverviewLoader';
import { getHotelWishList, takeHotelWishList } from '~/store/actions/user.action';

const UserSaveHotel = () => {
    const { id } = useSelector(state => state.user.userMyInfo);
    const [hotelsSaved, setHotelsSaved] = useState([]);
    const [statusCode, setStatusCode] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        getHotelsSaveByUser(id)
            .then(res => {
                setHotelsSaved(res.metadata.hotelResponses);
                setStatusCode(res.code);
            }).catch(err => {
                console.error(err);
            });
        // dispatch(getHotelWishList(id));
    }, []);

    const handleClickRemoveSaveHotel = (hotelId, e) => {
        e.stopPropagation();
        
        setHotelsSaved(hotelsSaved.filter(h => h.id != hotelId));
        dispatch(takeHotelWishList({
            userId: id,
            hotelId,
        }));
    }

    return (
        <CommonLayout>
            <div className='user__save__wrapper'>
                <h2 className='user__save__title'>My next trip</h2>
                <div className='user__save__overview'>
                    <HeartSolidIcon fill='#D3111E' />
                    <p>{`${hotelsSaved.length} properties saved`} </p>
                </div>
                <div className='user__save__list__trip row'>

                    {
                        statusCode === 1000 ?

                            hotelsSaved.length > 0 ?
                                hotelsSaved?.map((hotel, idx) => (
                                    <div key={idx} className='col-lg-4'>
                                        <HotelOverview
                                            hotelId={hotel?.id}
                                            hotelName={hotel?.name}
                                            hotelLocation={hotel?.location}
                                            srcImg={hotel?.image?.url}
                                            rate={hotel?.rate}
                                            fromCenter={hotel?.fromCenter}
                                            reviews={hotel?.reviews}
                                            roomPrice={hotel?.rooms?.[0]?.price}
                                            handleClickRemoveSaveHotel={(e) => handleClickRemoveSaveHotel(hotel?.id, e)}
                                        />
                                    </div>
                                ))
                                :
                                <p className='user__save__list__empty'>Your next trip is empty</p>
                            :
                            [1].map((item, idx) => (
                                <HotelOverviewLoader />
                            ))
                    }
                </div>
            </div>
        </CommonLayout>
    )
}

export default UserSaveHotel
