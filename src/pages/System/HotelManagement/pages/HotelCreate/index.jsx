import React, { useEffect } from 'react'
import "./_hotel_create.scss";
import ManagerDefaultLayout from '~/pages/System/layouts/ManagerDefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getConvenient } from '~/store/actions/convenient.action';
import Select from "react-select";
import { getTypesHotel } from '~/store/actions/typeHotel.action';

const HotelCreate = () => {

    const dispatch = useDispatch();
    const convenient = useSelector(state => state.convenient.convenient);
    const typeHotels = useSelector(state => state.typeHotel.typesHotel);

    const options = typeHotels?.map(t => ({
        value: t.id,
        label: t.name
    }));

    useEffect(() => {
        dispatch(getConvenient());
        dispatch(getTypesHotel());
    }, []);

    return (
        <div className='hotel__create__wrapper'>
            <ManagerDefaultLayout listItem={["Hotels", "Rooms", "Bookings", "Posts"]}>
                <div className='hotel__create__content'>
                    <h4 className='hotel__create__title'>Create new hotel</h4>
                    <form className='hotel__create__form row'>
                        <div className='col-lg-6'>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Type of Hotel</label>
                                <Select options={options} />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Location</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Convenient</label>
                                <div className='row'>
                                    {convenient.map(c => (
                                        <div className='col-lg-4'>
                                            <input type='checkbox' />
                                            <label htmlFor="name" className="form-label ms-1">{c.name}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </ManagerDefaultLayout>
        </div>
    )
}

export default HotelCreate