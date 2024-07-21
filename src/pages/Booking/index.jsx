import React, { useEffect, useState } from 'react';
import "./_booking.scss";

import ReactStars from 'react-stars';
import { ApplePayIcon, CardIcon, ChevronDownIcon, CupIcon, DiscoverIcon, ExclamationIcon, GooglePayIcon, GroupUserIcon, JSBIcon, MasterCardIcon, NoSmokingIcon, StripeCardIcon, UserIcon, VisaIcon } from '~/components/Icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Amenity from '../SearchResult/SearchResultDetail/components/Amenity';
import SubReviewFeedback from '~/components/SubReviewFeedback';
import DateRangeItem from './components/DateRangeItem';
import ItemLayout from './components/ItemLayout';
import InputUserInfo from './components/InputUserInfo';
import CheckboxBookingItem from './components/CheckboxBookingItem';
import RadioItem from './components/RadioItem';
import PropTypes from 'prop-types';
import RadioItemPayment from './components/RadioPaymentItem';
import MethodPaymentItem from './components/MethodPaymentItem';
import momoLogo from "~/assets/logos/mono_logo.png";
import vnPayLogo from "~/assets/logos/vn_pay_logo.png";
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomInfo } from '~/store/actions/room.action';
import { ToastContainer, toast } from 'react-toastify';
import { getRoomById } from '~/services/room.service';
import MyStep from '~/components/MyStep';
import DefaultLayout from '~/layouts/DefaultLayout';
import CheckoutLayout from '~/layouts/CheckoutLayout';
import { USD_VND } from '~/constants';
import { makePayment } from '~/services/payment.service';
import actionTypes from '~/store/actions/action.type';
import { makeBooking } from '~/services/booking.service';
import io from 'socket.io-client';

const ENDPOINT = "ws://localhost:9092"; 
const amenities = ["Pool", "Spa", "Air conditioning", "Wifi", "Bar", "Free parking"];

const Booking = () => {
    const {id, email, name, phone} = useSelector(state => state.user.userMyInfo);
    const userBookingInfo = useSelector(state => state.user.userBookingInfo);

    let firstName = "";
    let lastName = "";

    if(name) {
        const [fn, ...ln] = name?.split(" ");
        firstName = fn;
        lastName = ln;
    }
    

    const [activeMethodPayment, setActiveMethodPayment] = useState(0);
    const [input, setInput] = useState({
       ...userBookingInfo,
        email: email ? email : "",
        firstName: firstName ? firstName : "",
        lastName: lastName ?  lastName.join(" ") : "",
        phone: phone ? phone : "",
    });
    const [countrySelect, setCountrySelect] = useState("");
    const [currentStep, setCurrentStep] = useState(1);
    const [checkedConfirm, setCheckedConfirm] = useState(false);

    const location = useLocation();
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const parsed = queryString.parse(location.search);

    const room = useSelector(state => state.room.roomInfo);


    const handleCheckMethodPayment = (idx) => {
        setActiveMethodPayment(idx);
    }

    const { startDate, endDate, room: numOfRoom, children, adult, rid, hid } = parsed;

    useEffect(() => {
        dispatch(getRoomInfo(rid));
    }, []);

    useEffect(() => {
        if (currentStep === 2) {
            checkUserInfo(input, countrySelect);
        }
    }, [])

    const handleChangeInput = ({ type, value }) => {
        setInput({
            ...input,
            [type]: value
        });
    }

    const checkUserInfo = (input, country) => {
        if (!input["firstName"] || !input["lastName"] || !input["email"] || !input["phone"]) {
            toast.warn("Please fill all fields required!");
            return false;
        } else if (!country) {
            toast.warn("Please select your country!");
            return false;
        }

        return true;
    }

    const handleClickPrevStep = () => {
        if (currentStep === 1) {
            navigator(`/`)
            // console.log(`?name${location.search.split("&name")[1]}`);
        }

        setCurrentStep(prev => prev - 1);
    }

    const handleClickNextStep = () => {

        if (currentStep === 1) {
            if (checkUserInfo(input, countrySelect)) {
                // window.scrollTo(0, 0);
                dispatch({
                    type: actionTypes.SET_BOOKING_USER_INFO_SUCCESS,
                    userBookingInfo: {
                        ...input,
                        countrySelect
                    }
                })
                setCurrentStep(prev => prev + 1);
            }
        }

        if (currentStep === 2) {
            if(!checkedConfirm) {
                toast.warn("Please confirm condition!");
            } else if(activeMethodPayment === 1) {
                const amount = room?.price * USD_VND;
                makePayment(amount)
                    .then(res => {
                        if (res.code === 1000) {
                            window.open(res.metadata, "_blank");

                            // check result response from payment
                            const payload = {
                                userId: id,
                                roomsId: [room.id],
                                hotelId: hid,
                                numberAdult: adult,
                                numberChildren: children,
                                startDate: new Date(startDate),
                                endDate: new Date(endDate),
                                paymentCardId: 3
                            }

                            console.log(payload);
                            makeBooking(payload).then(res => {
                                if(res.code === 1000) {
                                    console.log(res);
                                }
                            }).catch(err => {
                                console.log(err);
                            })

                        }
                    })
                    .catch(err => {
                        console.error(err);
                    })
            }
        }
    }

    useEffect(() => {
        const socket = io(ENDPOINT);
        
        // Listen for payment response events
        socket.on('paymentResponse', (data) => {
          console.log('Payment Response received:', data);
          // Update the UI or notify the user based on the payment response
        });
    
        // Clean up on component unmount
        return () => {
          socket.disconnect();
        };
      }, []);
    

    return (
        <CheckoutLayout>
            <MyStep
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                handleClickNextStep={handleClickNextStep}
                handleClickPrevStep={handleClickPrevStep}
            >

                <div className='booking__wrapper'>

                    <div className='booking__content'>
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
                                                value={room?.hotel?.rate}
                                                color2={'#ffd700'}
                                            />
                                        </div>
                                        <h5 className='booking__hotel__info__name'>{room?.name}</h5>
                                        <p className='booking__hotel__info__location'>{room?.hotel?.location}</p>
                                        <SubReviewFeedback />
                                        <ul className='booking__hotel__info__amenities'>
                                            {room?.hotel?.convenients?.map((amenity, idx) => (
                                                <li key={idx}>
                                                    <Amenity
                                                        title={amenity.name}
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
                                            <DateRangeItem
                                                title='Check-in'
                                                date={new Date(startDate).toDateString()}
                                                fromHour='15:00'
                                            />
                                            <DateRangeItem
                                                title='Check-out'
                                                date={new Date(endDate).toDateString()}
                                                untilHour='12:00'
                                                isSeparate
                                            />
                                        </div>
                                        <div className='bhd__time__stay'>
                                            <p className='bhd__title'>Total length of stay:</p>
                                            <p className='bhd__value'>
                                                {`${(new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)} nights`}
                                            </p>
                                        </div>
                                        <div className='bhd__your__select'>
                                            <div className='bhd__your__select__desc'>
                                                <div className='bhd__your__select__detail'>
                                                    <p className='bhd__title'>You selected</p>
                                                    <p className='bhd__value'>{`${numOfRoom} room for ${adult} adults`}</p>
                                                </div>
                                                <div className='bhd__your__select__icon__wrapper'>
                                                    <ChevronDownIcon width='14px' height='14px' fill='#595959' />
                                                </div>
                                            </div>
                                            <Link
                                                to={`/search-result?${location.search}`}
                                            >
                                                Change your selection
                                            </Link>
                                        </div>
                                    </div>
                                </ItemLayout>

                                <ItemLayout>
                                    <div className='booking__price'>
                                        <h5 className='booking__price__title'>Your price summary</h5>
                                        <div className='booking__price__content'>
                                            <div className='booking__price__desc'>
                                                <h3>Price</h3>
                                                <h3>{`US$ ${room.price}`}</h3>
                                            </div>
                                            <div className='booking__price__details'>
                                                <p>+US$0 taxes and charges</p>
                                                <p>In property currency: AED 9,779</p>
                                            </div>
                                        </div>
                                    </div>
                                </ItemLayout>
                            </div>
                            <div className='booking__right__content col-lg-8'>
                                {currentStep === 1 &&
                                    <>
                                        {/* <ItemLayout>
                                    <div className='booking__rc__auth'>
                                        <UserIcon width='18px' height='18px' fill='#0d6efd' />
                                        <p>
                                            <Link to="/auth/sign-in">Sign in</Link> to book with your saved details or <Link to="/auth/sign-up" >register</Link> to manage your bookings on the go!
                                        </p>
                                    </div>
                                </ItemLayout> */}

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
                                                            handleChangeInput={e => handleChangeInput({
                                                                type: "firstName",
                                                                value: e.target.value
                                                            })}
                                                            value={input["firstName"]}
                                                        />
                                                        <InputUserInfo
                                                            label='Email address'
                                                            type='@email'
                                                            isObligatory
                                                            description='Confirmation email goes to this address'
                                                            placeholder='Watch out for types'
                                                            handleChangeInput={e => handleChangeInput({
                                                                type: "email",
                                                                value: e.target.value
                                                            })}
                                                            value={input["email"]}
                                                        />
                                                        <InputUserInfo
                                                            label='Country/region'
                                                            isObligatory
                                                            selects={[1]}
                                                            handleChangeSelect={({ value }) => {
                                                                setCountrySelect(value);
                                                            }}
                                                            // value={}
                                                        />
                                                        <InputUserInfo
                                                            label='Telephone (mobile number preferred)'
                                                            isObligatory
                                                            description='So the accommodation can reach you'
                                                            placeholder='+84'
                                                            handleChangeInput={e => handleChangeInput({
                                                                type: "phone",
                                                                value: e.target.value
                                                            })}
                                                            value={input["phone"]}
                                                        />
                                                    </div>
                                                    <div className='booking__user__info__input__item'>
                                                        <InputUserInfo
                                                            label='Last name'
                                                            isObligatory
                                                            handleChangeInput={e => handleChangeInput({
                                                                type: "lastName",
                                                                value: e.target.value
                                                            })}
                                                            value={input["lastName"]}
                                                        />
                                                    </div>
                                                </div>
                                                <CheckboxBookingItem
                                                    title="Yes, I'd like free paperless confirmation (recommended)"
                                                    description="We'll text you a link to download our app"
                                                />
                                            </div>
                                            {/* <div>
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
                                            </div> */}
                                        </ItemLayout>

                                        {/* <ItemLayout>
                                            <div className='booking__rc__room__info'>
                                                <h5 className='booking__room__info__title'>King Room with Sofa Bed</h5>
                                                <div className='bri__breakfast'>
                                                    <CupIcon fill='#6e585b' />
                                                    <div>
                                                        <h6>Breakfast included in the price</h6>
                                                        <p>8.2 Very good · <span>98 review</span>s</p>
                                                    </div>
                                                </div>
                                                <div className='bri__guest__users'>
                                                    <GroupUserIcon fill='#6e585b' />
                                                    <p>Guest: <span>2 adults</span></p>
                                                </div>
                                                <div className='bri__no__smoking'>
                                                    <NoSmokingIcon fill='#6e585b' />
                                                    <p>No smoking</p>
                                                </div>
                                                <InputUserInfo
                                                    label='Full guest name'
                                                    placeholder='First name, Last name'
                                                    style={{ width: "50%" }}
                                                    handleChangeInput={e => handleChangeInput({
                                                        type: "fullGuestName",
                                                        value: e.target.value
                                                    })}
                                                />
                                            </div>
                                        </ItemLayout> */}
                                    </>
                                }
                                {currentStep === 2 &&
                                    <div className='brc__payment__info'>
                                        <ItemLayout>
                                            <h4 className='brc__title'>When would you like to pay?</h4>
                                            <RadioItemPayment
                                                label="Pay at the property"
                                                desc="Your card won't be charged, we only need your card details to guarantee your booking."
                                                name="payment__info__method"
                                            >
                                                <CardIcon width='22px' height='22px' fill='#7854b8' />
                                            </RadioItemPayment>
                                            <RadioItemPayment
                                                label="Pay now"
                                                desc="You'll pay with Booking.com when you complete this booking. You can cancel before 21 June 2024 for a full refund."
                                                name="payment__info__method"
                                                defaultChecked
                                            >
                                                <CardIcon
                                                    width='22px'
                                                    height='22px'
                                                    fill='#7854b8'
                                                    className='payment__info__card__icon'
                                                />
                                                <GooglePayIcon
                                                    width='22px'
                                                    height='22px'
                                                    fill='#7854b8'
                                                    className='payment__info__gg__pay__icon'
                                                />
                                                <ApplePayIcon
                                                    width='22px'
                                                    height='22px'
                                                    fill='#7854b8'
                                                    className='payment__info__apple_pay__icon'
                                                />
                                            </RadioItemPayment>
                                        </ItemLayout>

                                        <ItemLayout>
                                            <div className='brc__method__payment'>
                                                <h4 className='brc__title'>How would you like to pay?</h4>
                                                <div className='method__payment__list'>
                                                    {/* <MethodPaymentItem
                                                        desc='New card'
                                                        currentActive={activeMethodPayment}
                                                        idx={0}
                                                        handleChecked={handleCheckMethodPayment}
                                                    >
                                                        <CardIcon width='40px' height='36px' fill='#7854b8' />
                                                    </MethodPaymentItem> */}

                                                    <MethodPaymentItem
                                                        desc='VN pay'
                                                        currentActive={activeMethodPayment}
                                                        idx={1}
                                                        handleChecked={handleCheckMethodPayment}
                                                    >
                                                        <img src={vnPayLogo} alt='momo-logo' className='method__payment__item__vn__pay' />
                                                    </MethodPaymentItem>

                                                    {/* <MethodPaymentItem
                                                        desc='Google pay'
                                                        currentActive={activeMethodPayment}
                                                        idx={2}
                                                        handleChecked={handleCheckMethodPayment}
                                                    >
                                                        <GooglePayIcon width='60px' height='48px' fill='#7854b8' />
                                                    </MethodPaymentItem>

                                                    <MethodPaymentItem
                                                        desc='Momo pay'
                                                        currentActive={activeMethodPayment}
                                                        idx={3}
                                                        handleChecked={handleCheckMethodPayment}
                                                    >
                                                        <img src={momoLogo} alt='momo-logo' className='method__payment__item__momo' />
                                                    </MethodPaymentItem> */}
                                                </div>
                                                {activeMethodPayment === 0 &&
                                                    <>
                                                        <div className='cards__payment'>
                                                            <h6 className='cards__payment__title'>New card</h6>
                                                            <div className='method__payment__list__cart'>
                                                                <JSBIcon
                                                                    width='24px'
                                                                    height='24px'
                                                                    fill='#7854b8'
                                                                    className='method__payment__item__icon' />
                                                                <MasterCardIcon
                                                                    width='24px'
                                                                    height='24px'
                                                                    fill='#7854b8'
                                                                    className='method__payment__item__icon' />
                                                                <DiscoverIcon
                                                                    width='24px'
                                                                    height='24px'
                                                                    fill='#7854b8'
                                                                    className='method__payment__item__icon' />
                                                                <VisaIcon
                                                                    width='24px'
                                                                    height='24px'
                                                                    fill='#7854b8'
                                                                    className='method__payment__item__icon' />
                                                                <StripeCardIcon
                                                                    width='24px'
                                                                    height='24px'
                                                                    fill='#7854b8'
                                                                    className='method__payment__item__icon' />
                                                                <ApplePayIcon
                                                                    width='24px'
                                                                    height='24px'
                                                                    fill='#7854b8'
                                                                    className='method__payment__item__icon' />
                                                            </div>
                                                        </div>
                                                        <div className='card__info'>
                                                            <InputUserInfo
                                                                label="Cardholder's Name"
                                                                isObligatory
                                                                type='text'
                                                            />
                                                            <InputUserInfo
                                                                label="Card Number"
                                                                isObligatory
                                                                type='text'
                                                            >
                                                                <CardIcon />
                                                            </InputUserInfo>
                                                            <div className='card__info__item'>
                                                                <InputUserInfo
                                                                    label="Expiry Date"
                                                                    isObligatory
                                                                    type='text'
                                                                    placeholder='MM / YY'
                                                                />
                                                                <InputUserInfo
                                                                    label="CVC"
                                                                    isObligatory
                                                                    type='text'
                                                                >
                                                                    <CardIcon width='18px' height='18px' />
                                                                </InputUserInfo>
                                                            </div>
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                        </ItemLayout>
                                        <div>
                                            <CheckboxBookingItem
                                                title="I consent to receiving marketing emails from Booking, including promotions, personalised recommendations, rewards, travel experiences and updates about Booking.com’s products and services."
                                                handleChangeChecked={() => setCheckedConfirm(!checkedConfirm)}
                                            />
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
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
                        style={{ fontSize: '14px' }}
                    />
                </div>
            </MyStep>
        </CheckoutLayout>
    )
}

Booking.propTypes = {
    currentStep: PropTypes.number.isRequired
}

export default Booking