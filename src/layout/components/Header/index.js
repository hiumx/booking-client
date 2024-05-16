import React from 'react'
import "./_header.scss";
import ButtonIcon from '~/components/ButtonIcon';
import { BedIcon, CarIcon, HelpIcon, PlaneIcon, StarIcon, TaxiIcon } from '~/components/Icons';
import vnFlag from "~/assets/images/vn.png";
import UserInfo from '~/components/UserInfo';

import Button from '~/components/Button';

const Header = () => {
  return (
    <div className='header__wrapper'>
      <div className='header__info'>
        <h5>Booking</h5>
        <div className='header__detail'>
          <div className='header__lang__help'>
            <img src={vnFlag} alt='uk-image' className='header__lang__img' />
            <div className='header__wrapper__help__icon'>
              <HelpIcon width='22px' height='22px' className='help__icon' fill="#fff" />
            </div>
          </div>
          {/* <div className='header__auth'>
            <Button title="Register" to="/register"/>
            <Button title="Sign in" to="/sign-in"/>
          </div> */}
          <UserInfo />
        </div>
      </div>
      <div className='header__nav'>
        <ul className='header__nav__list'>
          <li className='header__nav__item'>
            <ButtonIcon title="Stays" isBorder>
              <BedIcon className='bed__icon' fill='#fff' />
            </ButtonIcon>
          </li>
          <li className='header__nav__item'>
            <ButtonIcon title="Fights">
              <PlaneIcon className='plane__icon' fill='#fff' />
            </ButtonIcon>
          </li>
          <li className='header__nav__item'>
            <ButtonIcon title="Car rentals">
              <CarIcon className='car__icon' fill='#fff' />
            </ButtonIcon>
          </li>
          <li className='header__nav__item'>
            <ButtonIcon title="Attractions">
              <StarIcon className='car__icon' fill='#fff' />
            </ButtonIcon>
          </li>
          <li className='header__nav__item'>
            <ButtonIcon title="Airport taxis">
              <TaxiIcon className='bed__icon' fill='#fff' />
            </ButtonIcon>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
