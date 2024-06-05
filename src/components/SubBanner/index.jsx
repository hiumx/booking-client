import React from 'react'
import "./_sub_banner.scss";
import SubBannerItem from './components/SubBannerItem';
import { CalendarIcon, CartFlatbedIcon, ExclamationIcon, TagIcon } from '../Icons';

const SubBanner = () => {
    return (
        <div className='sub__banner__wrapper'>
            <div className='sub__banner__primary'>
                <h3 className='sub__banner__title'>
                    Find and book your perfect stay <ExclamationIcon width='14px' height='14px' fill='#fff' />
                </h3>
            </div>
            <div className='sub__banner__secondary'>
                <SubBannerItem>
                    <CartFlatbedIcon width='34px' height='34px' fill='#fff' />
                </SubBannerItem>
                <SubBannerItem>
                    <TagIcon width='36px' height='36px' fill='#fff' />
                </SubBannerItem>
                <SubBannerItem style={{ marginRight: 0 }}>
                    <CalendarIcon width='34px' height='34px' fill='#fff' />
                </SubBannerItem>
            </div>
        </div>
    )
}

export default SubBanner
