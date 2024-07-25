import React, { useEffect, useState } from 'react'
import "./_search_result_detail.scss";
import Header from '~/layouts/components/Header';
import SubNav from '~/components/SubNav';
import ReactStars from 'react-stars';
import { CarIcon, LocationIcon } from '~/components/Icons';
import SearchInput from '~/components/SearchInput';
import ReviewFeedback from '~/components/ReviewFeedback';
import Amenity from './components/Amenity';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import SimpleMap from '~/components/SimpleMap';
import LazyLoad from 'react-lazyload';
import RoomBookingDetail from './components/RoomBookingDetail';
import SeeMore from '~/components/SeeMore';
import Footer from '~/layouts/components/Footer';
import { getHotelById } from '~/services/hotel.service';
import Carousel from '~/components/Carousel';
import queryString from 'query-string';
import FeedbackItem from '~/components/Carousel/components/FeedbackItem';
import GroupImageLoader from '~/components/MyLoader/components/GroupImageLoader';
import FeedbackItemLoader from '~/components/MyLoader/components/FeedbackItemLoader';
import Contact from '~/layouts/components/Contact';
import { CONTACTS } from '~/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getResultSearchHotel } from '~/store/actions/hotel.action';
import { toast, ToastContainer } from 'react-toastify';
import { checkObjEmpty } from '~/utils';
import { newReview } from '~/services/review.service';

const reviewFake = [
    {
        point: 9.0
    }
];

const imagesFake = [
    "https://d8271hh5ynwda.cloudfront.net/1716947029239-450541293.jpg",
    "https://d8271hh5ynwda.cloudfront.net/1716947028892-450541292.jpg",
    "https://d8271hh5ynwda.cloudfront.net/1716947028264-450537385.jpg",
    "https://d8271hh5ynwda.cloudfront.net/1716947026990-20964731.jpg"
];


const listDataSimpleComponentFake = [
    {
        imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square600/161183869.webp?k=f53bf95f6658de21867e46105bc14d2bca9801d6f55fc376f9a64e8440f640e5&o=",
        name: "Luxury Casa - Grand Sea View Apartment JBR Beach",
        location: "Jumeirah Beach Residence, Dubai",
        isReview: true,
        isSave: true,
    },
    {
        imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square600/434173671.webp?k=54a72c4ad097e0cd880f2ea11be510caae3839eae929b679a554799efad28958&o=",
        name: "Habtoor Grand Resort, Autograph CollectionOpens",
        location: "Jumeirah Beach Residence, Dubai",
        isReview: true,
        isSave: true,
    },
    {
        imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square600/523279348.webp?k=ff695d9624f9267f5c49973db41965c538fb34f82b47746c2f38f6e0896087fd&o=",
        name: "Overnight Super Yacht - Orchid",
        location: "Jumeirah Beach Residence, Dubai",
        isReview: true,
        isSave: true,
    },
    {
        imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square600/274783838.webp?k=73b2d1d1a90681b33699e44cb906b92e86b19bec5c1dcaca11d56825252b7c17&o=",
        name: "Dusit D2 Kenz Hotel DubaiOpens",
        location: "Jumeirah Beach Residence, Dubai",
        isReview: true,
        isSave: true,
    },
    {
        imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square600/507477898.webp?k=5d360dd149e1c0229cb06b58a798b4fd9b182080a1ed90ea3888c6e2636c3194&o=",
        name: "Rove La Mer Beach, Jumeirah",
        location: "Beach & Coast, Dubai",
        isReview: true,
        isSave: true,
    },
    {
        imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square600/347770897.webp?k=232c21cbc57815b0032714100d82dfc8988b22d9a777cbd2187b07158d82523a&o=",
        name: "Crowne Plaza - Dubai Jumeirah, an IHG HotelOpens",
        location: "Beach & Coast, Dubai",
        isReview: true,
        isSave: true,
    },
    {
        imgSrc: "https://cf.bstatic.com/xdata/images/hotel/square600/369828225.webp?k=f385a5ed7d1befcd4d4677aec4ba53ff12cc015e3867236ee500af51311a4491&o=",
        name: "Barsha Heights (Tecom) , Dubai",
        location: "Jumeirah Beach Residence, Dubai",
        isReview: true,
        isSave: true,
    },
];

const SearchResultDetail = () => {

    const [hotelData, setHotelData] = useState({});
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewContent, setReviewContent] = useState("");
    const [reviewPoint, setReviewPoint] = useState('');
    const [reviewStatus, setReviewStatus] = useState(false);
    const { id } = useParams();

    const location = useLocation();
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const parsed = queryString.parse(location.search);

    const listSearchHotel = useSelector(state => state.hotel.listSearchHotel);
    const user = useSelector(state => state.user.userMyInfo);
    const [hotel] = listSearchHotel.filter(h => h.id == id);

    const roomsAvailable = hotel?.rooms.map(r => r.id);

    useEffect(() => {
        dispatch(getResultSearchHotel({
            location: parsed.location,
            startDate: new Date(parsed.startDate),
            endDate: new Date(parsed.endDate),
            options: {
                adult: parsed.adult,
                children: parsed.children,
                room: parsed.room,
            }
        }));
    }, []);

    useEffect(() => {
        getHotelById(id)
            .then(res => {
                if (res.code === 1000) {
                    setTimeout(() => {
                        setHotelData(res.metadata);
                    }, 200);
                }
            })
            .catch(error => {
                console.error(error);
            })
    }, [reviewStatus]);

    const handleClickReview = () => {
        if (checkObjEmpty(user))
            navigator("/auth/sign-in");
        if (!reviewTitle || !reviewContent || !reviewPoint)
            toast.warn("Please fill all fields require!")
        else if (Number(reviewPoint) < 0 || Number(reviewPoint) > 10)
            toast.warn("Point of review must be between 0 and 10!");
        else {
            newReview({
                title: reviewTitle,
                content: reviewContent,
                userId: user?.id,
                hotelId: Number(id),
                point: Number(reviewPoint)
            }).then(res => {
                if (res.code === 1000) {
                    setReviewStatus(true);
                    setReviewTitle("");
                    setReviewContent("");
                    setReviewPoint("");
                } else {
                    toast.warn(res.message);
                }
            }).catch(err => {
                console.error(err);
            })
        }
    }

    return (
        <div className='search__result__detail__wrapper'>
            <Header style={{ padding: '0 14%' }} />
            <div className='srd__search__input__wrapper'>
                <SearchInput style={{ top: '10px', padding: '0 14%' }} searchValue={parsed} />
            </div>
            <div className='srd__content'>
                <SubNav hotelName={hotelData?.name} query={location.search} />

                <div className='srd__overview'>
                    <div className='srd__overview__title__star'>
                        <h2 className='srd__overview__title'>{hotelData?.name}</h2>
                        <ReactStars
                            count={5}
                            edit={false}
                            size={14}
                            value={hotelData?.rate}
                            color2={'#ffd700'}
                        />
                    </div>
                    <div className='srd__overview__location'>
                        <LocationIcon fill='#006ce4' />
                        <p className='srd__overview__location__detail'>
                            {hotelData?.location}
                            - <a href='#' className='srd__overview__location__link'>Excellent location - show map</a>
                        </p>
                    </div>
                    <div className='srd__overview__deliver'>
                        <CarIcon fill='#008234' width='14px' height='14px' />
                        <p className='srd__overview__deliver__detail'>
                            Book a stay over US$54 and get a free private taxi from the airport
                        </p>
                    </div>
                </div>

                {hotelData?.images
                    ?
                    <div className='srd__images'>
                        <div className='srd__primary__img__wrapper'>
                            {/* <LazyLoad height="100%"> */}
                            <img
                                src={hotelData?.images?.[0]?.url}
                                alt='hotel-img'
                                className='srd__primary__img'
                            />
                            {/* </LazyLoad> */}
                        </div>
                        <ul className='srd__secondary__img__wrapper'>
                            {hotelData?.images?.slice(1).map((image, idx) => (
                                <div key={idx} className='srd__img__wrapper'>
                                    {/* <LazyLoad key={idx} height="100%"> */}
                                    <img
                                        src={image?.url}
                                        alt='hotel-img'
                                        className='srd__secondary__img'
                                    />
                                    {/* </LazyLoad> */}
                                </div>
                            ))}
                        </ul>
                    </div>
                    : <GroupImageLoader />
                }

                <div className='srd__feedback__near row'>
                    <div className='col-lg-8'>
                        {hotelData?.reviews
                            ?
                            <div className='srd__reviews__wrapper'>
                                <ReviewFeedback reviews={hotelData?.reviews} />
                                <SeeMore text={`See all ${hotelData?.reviews?.length} reviews`} />
                            </div>
                            : <FeedbackItemLoader />
                        }
                        <div className='srd__amenities'>
                            <h4>Popular amenities</h4>
                            <ul className='srd__amenities__list'>
                                {hotelData?.convenients?.map((amenity, idx) => (
                                    <li key={idx} className='srd__amenities__item'>
                                        <Amenity title={amenity.name} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='srd__near__location col-lg-4'>
                        <h4>What's around</h4>
                        {/* <SimpleMap /> */}
                        <ul className='srd__near__location__list'>
                            <li className='srd__near__location__item'>
                                <div className='srd__nl__name'>
                                    <LocationIcon fill='#0171c2' width='14px' height='14px' />
                                    <p>Hai Phong Museum</p>
                                </div>
                                <p className='srd__nl__time__drive'>4 min drive</p>
                            </li>
                            <li className='srd__near__location__item'>
                                <div className='srd__nl__name'>
                                    <LocationIcon fill='#0171c2' width='14px' height='14px' />
                                    <p>Hai Phong Opera House</p>
                                </div>
                                <p className='srd__nl__time__drive'>5 min drive</p>
                            </li>
                            <li className='srd__near__location__item'>
                                <div className='srd__nl__name'>
                                    <LocationIcon fill='#0171c2' width='14px' height='14px' />
                                    <p>Aeon mall le chau hai phong</p>
                                </div>
                                <p className='srd__nl__time__drive'>6 min drive</p>
                            </li>
                        </ul>
                        <SeeMore text="See all" />
                    </div>
                </div>
                <div className='row'>
                    {hotelData?.rooms?.map((room, idx) => (
                        roomsAvailable?.includes(room.id) &&
                        <div key={idx} className='col-lg-4'>
                            <RoomBookingDetail data={room} />
                        </div>

                    ))}
                </div>
                <Carousel
                    type='image-simple-component'
                    title="Recommended stays for you"
                    description='Based on your most recently viewed property'
                    items={listDataSimpleComponentFake}
                    autoPlay={true}
                />
                <Carousel
                    type='feedback-item-component'
                    title="See what guests loved the most"
                    items={hotelData?.reviews}
                    slidesToShow={3}
                    titleStyle={{ marginBottom: "-16px" }}
                />
                <div className='srd__new__review__form'>
                    <h6 className='srd__new__review__title'>Add a review...</h6>
                    <div>
                        <div className='srd__new__review__item'>
                            <input
                                type='text'
                                className='srd__new__review__item__input'
                                placeholder='Title...'
                                onChange={e => setReviewTitle(e.target.value)}
                                value={reviewTitle}
                            />
                        </div>
                        <div className='srd__new__review__item'>
                            <input
                                type='text'
                                className='srd__new__review__item__input'
                                placeholder='Content...'
                                onChange={e => setReviewContent(e.target.value)}
                                value={reviewContent}
                            />
                        </div>
                        <div className='srd__new__review__item'>
                            <input
                                type='text'
                                className='srd__new__review__item__input'
                                placeholder='Point...'
                                onChange={e => setReviewPoint(e.target.value)}
                                value={reviewPoint}
                            />
                        </div>
                    </div>
                    <button className='srd__new__review__btn' onClick={handleClickReview}>Review</button>
                </div>
            </div>

            <Contact contacts={CONTACTS} />
            <Footer />
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
    )
}

export default SearchResultDetail
