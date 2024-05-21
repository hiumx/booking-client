import React, { useEffect } from 'react'
import "./_header_sub.scss";
import { HelpIcon } from '~/components/Icons';
import vnFlag from "~/assets/images/vn.png"
import UserInfo from '~/components/UserInfo';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkObjEmpty } from '~/utils';
import { getMyInfo } from '~/store/actions/user.action';

const HeaderSub = ({ userData }) => {
    const navigator = useNavigate();

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.userMyInfo);

    useEffect(() => {
        dispatch(getMyInfo());
    }, []);

    return (
        <div className='header__sub__wrapper'>
            <h5 onClick={() => navigator("/")}>Booking</h5>
            <div className='header__sub__info'>
                <img src={vnFlag} alt='uk-image' className='header__sub__lang__img' />
                <div className='hs__wrapper__help__icon'>
                    <HelpIcon width='22px' height='22px' className='help__icon' fill="#fff" />
                </div>
                {!checkObjEmpty(user) && <UserInfo userData={user} />}
            </div>
        </div>
    )
}

export default HeaderSub
