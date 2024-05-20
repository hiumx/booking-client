import React, { useState } from 'react'
import "./_setting_detail_item.scss";
import { Link } from 'react-router-dom';

const SettingDetailItem = ({ title, description, items = [], image = false }) => {

    const [typeCustom, setTypeCustom] = useState("");

    const handleClickAction = ({ title, content }) => {
        setTypeCustom(title);
        console.log({ title, content });
    }

    return (
        <div className='setting__detail__item__wrapper'>
            <div className='setting__detail__head'>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                {image && <input type='file' className='setting__detail__item__user__img'/>}
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
                                                    />
                                                    :
                                                    <input
                                                        type="text"
                                                        className='setting__detail__item__current__info__input'
                                                        defaultValue={item.content}
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

export default SettingDetailItem
