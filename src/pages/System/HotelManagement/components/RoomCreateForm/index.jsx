import React, { useState } from 'react'
import "./_room_create_form.scss";
import { PlusIcon } from '~/components/Icons';

const RoomCreateForm = ({ idx, handleClickPlus, handleChangeRoomInput, handleBlurPrice }) => {

    return (
        <div className='room__create__form__wrapper'>
            <h6 className='mb-1'>{`Room ${idx}`}</h6>
            <div className='room__create__form__content'>
                <form className='room__create__form'>
                    <div className="mb-3">
                        <label htmlFor="room-name" className="form-label room__create__label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="room-name"
                            onChange={e => handleChangeRoomInput("name", e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="room-number-beds" className="form-label room__create__label">Number of beds</label>
                        <input
                            type="text"
                            className="form-control"
                            id="room-number-beds"
                            onChange={e => handleChangeRoomInput("number_beds", e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="room-price" className="form-label room__create__label">Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id="room-price"
                            onChange={e => handleChangeRoomInput("price", e.target.value)}
                            onBlur={handleBlurPrice}
                        />
                    </div>
                </form>
                <div className='room__create__plus__icon__wrapper' onClick={handleClickPlus}>
                    <PlusIcon width='20px' height='20px' fill='#6439ff' />
                </div>
            </div>
        </div >
    )
}

export default RoomCreateForm