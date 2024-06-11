import React from 'react'
import "./_header_sub.scss";
import { HelpIcon } from '~/components/Icons';
import vnFlag from "~/assets/images/vn.png"
import ukFlag from "~/assets/images/uk.png"
import UserInfo from '~/components/UserInfo';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkObjEmpty } from '~/utils';

const SubHeader = () => {
    
    const navigator = useNavigate();

    const user = useSelector(state => state.user.userMyInfo);

    return (
        <div className='header__sub__wrapper'>
            <h5 onClick={() => navigator("/")}>Booking</h5>
            <div className='header__sub__info'>
                <p>USD</p>
                <img src={ukFlag} alt='uk-image' className='header__sub__lang__img' />
                <div className='hs__wrapper__help__icon'>
                    <HelpIcon width='22px' height='22px' className='help__icon' fill="#fff" />
                </div>
                {!checkObjEmpty(user) && <UserInfo userData={user} />}
            </div>
        </div>
    )
}

export default SubHeader
