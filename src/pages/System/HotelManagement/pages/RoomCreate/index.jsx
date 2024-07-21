import React, { useState } from 'react'
import "./_room_create.scss";
import ManagerDefaultLayout from '~/pages/System/layouts/ManagerDefaultLayout';
import RoomCreateForm from '../../components/RoomCreateForm';

const RoomCreate = () => {

    const [roomInput, setRoomInput] = useState({});
    const [numOfRoom, setNumOfRoom] = useState([1]);
    const [rooms, setRooms] = useState([]);


    const handleClickPlusBtn = () => {
        setNumOfRoom([...numOfRoom, 1]);
    }

    const handleBlurPrice = () => {
        setRooms([...rooms, roomInput]);
    }

    const handleChangeRoomInput = (name, value) => {
        setRoomInput({
            ...roomInput,
            [name]: value
        });
    }

    return (
        <div className='room__create__wrapper'>
            <ManagerDefaultLayout listItem={["Hotels"]}>
                <h4 className='room__create__title'>Create new room</h4>
                <div className='room__create__content'>
                    {
                        numOfRoom.map((r, idx) => (
                            <RoomCreateForm
                                key={idx} idx={idx + 1}
                                handleClickPlus={handleClickPlusBtn}
                                handleChangeRoomInput={handleChangeRoomInput}
                                handleBlurPrice={handleBlurPrice}
                            />
                        ))
                    }
                    <button className='btn btn-primary'>Create</button>
                </div>
            </ManagerDefaultLayout>
        </div>
    )
}

export default RoomCreate