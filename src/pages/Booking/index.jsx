import React from 'react';
import "./_booking.scss";

import { CONTACTS } from '~/constants'
import Contact from '~/layouts/components/Contact'
import Footer from '~/layouts/components/Footer'
import Header from '~/layouts/components/Header'
import MyStep from '~/components/MyStep';
import HeaderSub from '~/layouts/components/SubHeader';
import ReactStars from 'react-stars';
import { ChevronDownIcon, CupIcon, ExclamationIcon, GroupUserIcon, UserIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import Amenity from '../SearchResult/SearchResultDetail/components/Amenity';
import SubReviewFeedback from '~/components/SubReviewFeedback';
import DateRangeItem from './components/DateRangeItem';
import ItemLayout from './components/ItemLayout';
import InputUserInfo from './components/InputUserInfo';
import CheckboxBookingItem from './components/CheckboxBookingItem';
import CheckoutLayout from '~/layouts/CheckoutLayout';
import RadioItem from './components/RadioItem';

const amenities = ["Pool", "Spa", "Air conditioning", "Wifi", "Bar", "Free parking"];

const Booking = () => {
    return (
        <CheckoutLayout>
            <div className='booking__wrapper'>
                <div className='booking__content'>
                    <MyStep />
                    <div className='row'>
                        <div className='booking__left__content col-lg-4'>
                            <ItemLayout>
                                <div className='booking__hotel__info'>
                                    <div className='booking__hotel__info__type__star'>
                                        <p className='booking__hotel__info__type'>Resort</p>
                                        <ReactStars
                                            count={5}
                                            edit={false}
                                            size={13}
                                            value={5}
                                            color2={'#ffd700'}
                                        />
                                    </div>
                                    <h5 className='booking__hotel__info__name'>Hampton by Hilton Marjan Island</h5>
                                    <p className='booking__hotel__info__location'>Marjan Island Boulevard, Ras al Khaimah, United Arab Emirates</p>
                                    <SubReviewFeedback />
                                    <ul className='booking__hotel__info__amenities'>
                                        {amenities?.map((amenity, idx) => (
                                            <li key={idx}>
                                                <Amenity
                                                    title={amenity}
                                                    iconWidth='14px'
                                                    titleStyle={{ fontSize: "12px", marginLeft: "6px" }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ItemLayout>
                            <ItemLayout>
                                <div className='booking__hotel__details'>
                                    <h5 className='booking__hotel__details__title'>Your booking details</h5>
                                    <div className='bhd__date__range'>
                                        <DateRangeItem title='Check-in' date='Sat 22 Jun 2024' fromHour='15:00' />
                                        <DateRangeItem title='Check-out' date='Sat 30 Jun 2024' untilHour='12:00' isSeparate />
                                    </div>
                                    <div className='bhd__time__stay'>
                                        <p className='bhd__title'>Total length of stay:</p>
                                        <p className='bhd__value'>8 nights</p>
                                    </div>
                                    <div className='bhd__your__select'>
                                        <div className='bhd__your__select__desc'>
                                            <div className='bhd__your__select__detail'>
                                                <p className='bhd__title'>You selected</p>
                                                <p className='bhd__value'>1 room for 2 adults</p>
                                            </div>
                                            <div className='bhd__your__select__icon__wrapper'>
                                                <ChevronDownIcon width='14px' height='14px' fill='#595959' />
                                            </div>
                                        </div>
                                        <Link to={"#"}>Change your selection</Link>
                                    </div>
                                </div>
                            </ItemLayout>
                        </div>
                        <div className='booking__right__content col-lg-8'>
                            <ItemLayout>
                                <div className='booking__rc__auth'>
                                    <UserIcon width='18px' height='18px' fill='#0d6efd' />
                                    <p>
                                        <Link to="/auth/sign-in">Sign in</Link> to book with your saved details or <Link to="/auth/sign-up" >register</Link> to manage your bookings on the go!
                                    </p>
                                </div>
                            </ItemLayout>
                            <ItemLayout>
                                <div className='booking__rc__user__info'>
                                    <h5 className='booking__user__info__title'>Enter your details</h5>
                                    <ItemLayout style={{ backgroundColor: "#f5f5f5", borderColor: "#868686" }}>
                                        <div className='booking__user__info__warning'>
                                            <ExclamationIcon />
                                            <p>Almost done! Just fill in the <span>*</span> required info</p>
                                        </div>
                                    </ItemLayout>
                                    <div className='booking__user__info__input'>
                                        <div className='booking__user__info__input__item'>
                                            <InputUserInfo
                                                label='First name'
                                                isObligatory
                                            />
                                            <InputUserInfo
                                                label='Email address'
                                                type='@email'
                                                isObligatory
                                                description='Confirmation email goes to this address'
                                                placeholder='Watch out for types'
                                            />
                                            <InputUserInfo
                                                label='Country/region'
                                                isObligatory
                                                selects={[1]}
                                            />
                                            <InputUserInfo
                                                label='Telephone (mobile number preferred)'
                                                isObligatory
                                                description='So the accommodation can reach you'
                                                placeholder='+84'
                                            />
                                        </div>
                                        <div className='booking__user__info__input__item'>
                                            <InputUserInfo
                                                label='Last name'
                                                isObligatory
                                            />
                                        </div>
                                    </div>
                                    <CheckboxBookingItem
                                        title="Yes, I'd like free paperless confirmation (recommended)"
                                        description="We'll text you a link to download our app"
                                    />
                                </div>
                                <div>
                                    <RadioItem
                                        title="Who are you booking for?"
                                        listRadios={[
                                            "I am the main guest",
                                            "Booking is for someone else"
                                        ]}
                                        isBorder
                                    />
                                    <RadioItem
                                        title="Are you travelling for work?"
                                        listRadios={[
                                            "Yes",
                                            "No"
                                        ]}
                                        listStyle={{ display: "flex", gap: "16px" }}
                                    />
                                </div>
                            </ItemLayout>
                            <ItemLayout>
                                <div className='booking__rc__room__info'>
                                    <h5 className='booking__room__info__title'>King Room with Sofa Bed</h5>
                                    <div className='bri__breakfast'>
                                        <CupIcon fill='#1a1a1a' />
                                        <div>
                                            <h6>Breakfast included in the price</h6>
                                            <p>8.2 Very good · <span>98 review</span>s</p>
                                        </div>
                                    </div>
                                    <div className='bri__guest__users'>
                                        <GroupUserIcon fill='#1a1a1a' />
                                        <p>Guest: <span>2 adults</span></p>
                                    </div>
                                    <InputUserInfo
                                        label='Full guest name'
                                        placeholder='First name, Last name'
                                        style={{ width: "50%" }}
                                    />
                                </div>
                            </ItemLayout>
                        </div>
                    </div>
                </div>
                {/* <Contact contacts={CONTACTS} /> */}
            </div>
        </CheckoutLayout>
    )
}

export default Booking