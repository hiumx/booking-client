import React, { useEffect, useState } from 'react'
import "./_hotel_update.scss";
import ManagerDefaultLayout from '~/pages/System/layouts/ManagerDefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getConvenient } from '~/store/actions/convenient.action';
import Select from "react-select";
import { getTypesHotel } from '~/store/actions/typeHotel.action';
import RoomCreateForm from '../../components/RoomCreateForm';
import { createHotel } from '~/services/hotel.service';
import { uploadHotelImages } from '~/services/upload.service';
import { ToastContainer, toast } from 'react-toastify';

const HotelUpdate = () => {

    const dispatch = useDispatch();
    const convenient = useSelector(state => state.convenient.convenient);
    const typeHotels = useSelector(state => state.typeHotel.typesHotel);
    const user = useSelector(state => state.user.userMyInfo);
    const [numOfRoom, setNumOfRoom] = useState([1]);

    const [input, setInput] = useState({});
    const [typeHotelId, setTypeHotelId] = useState(1);
    const [checkedConvenient, setCheckedConvenient] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [images, setImages] = useState([]);

    const [roomInput, setRoomInput] = useState({});

    const handleChangeRoomInput = (name, value) => {
        setRoomInput({
            ...roomInput,
            [name]: value
        });
    }


    const options = typeHotels?.map(t => ({
        value: t.id,
        label: t.name
    }));

    useEffect(() => {
        dispatch(getConvenient());
        dispatch(getTypesHotel());
    }, []);

    const handleClickPlusBtn = () => {
        setNumOfRoom([...numOfRoom, 1]);
    }

    const handleChangeInput = ({ name, value }) => {
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleCheckedConvenient = (id) => {
        if (checkedConvenient.includes(id))
            setCheckedConvenient(checkedConvenient.filter(c => c !== id))
        else
            setCheckedConvenient([...checkedConvenient, id]);
    }

    const handleClickSubmit = () => {
        const formData = new FormData();
        const payload = {
            ...input,
            typeId: typeHotelId,
            rate: 4.0,
            convenientIds: checkedConvenient,
            rooms,
            managerId: user.id,
        }

        createHotel(payload)
            .then(res => {
                if (res.code === 1000) {
                    toast.success("Create new hotel successfully");
                    // setInput({});
                    // setTypeHotelId(1);
                    // setCheckedConvenient([]);
                    // setRooms([]);
                    // setImages([]);
                    // setRoomInput({});
                    for (let i = 0; i < images.length; i++) {
                        formData.append('files', images[i]);
                    }
                    formData.append("hotel_id", res?.metadata?.id);
                    uploadHotelImages(formData)
                        .then(res => {
                            if (res.code === 1000) {
                                console.log(res);
                            }
                        }).catch(err => {
                            console.error(err);
                        })
                }
            }).catch(err => {
                console.error(err);
            })


    }

    const handleBlurPrice = () => {
        setRooms([...rooms, roomInput]);
    }

    const handleChangeImages = e => {
        setImages(e.target.files);
    }

    return (
        <div className='hotel__create__wrapper'>
            <ManagerDefaultLayout listItem={["Hotels"]}>
                <div className='hotel__create__content'>
                    <h4 className='hotel__create__title'>Update hotel</h4>
                    <form className='hotel__create__form row'>
                        <div className='col-lg-6'>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    onChange={e => handleChangeInput({ name: "name", value: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type of Hotel:</label>
                                <Select options={options} onChange={({ value }) => setTypeHotelId(value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description:</label>
                                <textarea
                                    className='form-control'
                                    id='description'
                                    onChange={e => handleChangeInput({ name: "description", value: e.target.value })}
                                >
                                </textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Distance from center:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    onChange={e => handleChangeInput({ name: "fromCenter", value: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="images" className="form-label">Image:</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="images"
                                    multiple
                                    onChange={handleChangeImages}
                                />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className="mb-3">
                                <label htmlFor="location" className="form-label">Location:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="location"
                                    onChange={e => handleChangeInput({ name: "location", value: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Convenient:</label>
                                <div className='row'>
                                    {convenient.map(c => (
                                        <div className='col-lg-4'>
                                            <input
                                                type='checkbox'
                                                onChange={() => handleCheckedConvenient(c.id)}
                                                id={`convenient-${c.id}`}
                                            />
                                            <label htmlFor={`convenient-${c.id}`} className="form-label ms-1">{c.name}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* <div className='hotel__create__new__room'>
                            <label htmlFor="name" className="form-label d-block">Rooms:</label>
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
                        </div> */}
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleClickSubmit}
                        >
                            Create
                        </button>
                    </form>
                </div>
            </ManagerDefaultLayout>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                style={{fontSize: '14px'}}
            />
        </div>
    )
}

export default HotelUpdate