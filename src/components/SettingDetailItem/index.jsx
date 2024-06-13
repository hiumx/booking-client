import React, { useState } from 'react'
import "./_setting_detail_item.scss";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateUserByField } from '~/services/user.service';
import { useDispatch } from 'react-redux';
import { getMyInfo } from '~/store/actions/user.action';
import { signOut } from '~/services/auth.service';
import PropTypes from 'prop-types';

const SettingDetailItem = ({ title, description, items = [], image = false }) => {

    const [typeCustom, setTypeCustom] = useState("");
    const [field, setField] = useState("");
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleClickAction = ({ title, content }) => {
        setTypeCustom(title);

        if (title === "Active sessions") {
            signOut({
                token: localStorage.getItem("token")
            }).then(res => {
                if(res?.code === 1000) {
                    localStorage.removeItem("token");
                    dispatch(getMyInfo());
                    navigator("/");
                }
            }).catch(error => {
                console.error(error);
            })
        }

        if (field) {
            let data = {};
            switch (title) {
                case "Name":
                    data = { "name": field }
                    break;
                case "Email address":
                    data = { "email": field }
                    break;
                case "Phone number":
                    data = { "phone": field }
                    break;
                case "Date of birth":
                    data = { "dob": field }
                    break;
                case "Gender":
                    data = { "gender": field }
                    break;
                case "Address":
                    data = { "address": field }
                    break;
                default:
                    // throw new Error("Attribute invalid!");
                    break;
            }

            updateUserByField(id, data)
                .then(res => {
                    if (res.code === 1000) {
                        dispatch(getMyInfo());
                        setField("");
                        setTypeCustom("");
                    }
                }).catch(err => {
                    console.error(err);
                })

        }
    }

    return (
        <div className='setting__detail__item__wrapper'>
            <div className='setting__detail__head'>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                {image && <input type='file' className='setting__detail__item__user__img' />}
            </div>
            <ul className='setting__detail__item__list'>
                {
                    items?.map(
                        (item, idx) =>
                            <li key={idx} className='setting__detail__item__item'>
                                <p className='setting__detail__item__title'>{item.title}</p>
                                <div className='setting__detail__item__info'>
                                    {typeCustom === item.title
                                        ?
                                        <div className='setting__detail__item__current__info__input__wrapper'>
                                            {
                                                typeCustom === "Date of birth"
                                                    ?
                                                    <input
                                                        type="date"
                                                        className='setting__detail__item__current__info__input'
                                                        defaultValue={new Date(item.content).toISOString().substring(0, 10)}
                                                        value={field}
                                                        onChange={e => setField(e.target.value)}
                                                    />
                                                    :
                                                    <input
                                                        type="text"
                                                        className='setting__detail__item__current__info__input'
                                                        defaultValue={item.content}
                                                        value={field}
                                                        onChange={e => setField(e.target.value)}
                                                    />
                                            }
                                        </div>
                                        :
                                        <p className='setting__detail__item__current__info'>{item.content}</p>
                                    }
                                    {
                                        item?.link
                                            ? <Link className='setting__detail__item__action' to={item.link}>{item.action}</Link>
                                            :
                                            <p
                                                className='setting__detail__item__action'
                                                onClick={() => handleClickAction({
                                                    title: item.title,
                                                    content: item.content
                                                })}
                                            >
                                                {
                                                    typeCustom === item.title ? "Save" : item.action
                                                }
                                            </p>
                                    }
                                </div>
                            </li>
                    )
                }
            </ul>
        </div>
    )
}

SettingDetailItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    image: PropTypes.bool 
}

export default SettingDetailItem
