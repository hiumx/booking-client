import React from 'react'
import "./_setting_detail_item.scss";
import { Link } from 'react-router-dom';

const SettingDetailItem = ({ title, description, items = [] }) => {
    return (
        <div className='setting__detail__item__wrapper'>
            <div className='setting__detail__head'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <ul className='setting__detail__item__list'>
                {
                    items?.map(
                        (item, idx) =>
                            <li key={idx} className='setting__detail__item__item'>
                                <p className='setting__detail__item__title'>{item.title}</p>
                                <div className='setting__detail__item__info'>
                                    <p className='setting__detail__item__current__info'>{item.content}</p>
                                    {
                                        item?.link
                                            ? <Link className='setting__detail__item__action' to={item.link}>{item.action}</Link>
                                            :
                                            <p className='setting__detail__item__action'>{item.action}</p>
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
