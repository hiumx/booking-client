
import Carousel from '~/components/Carousel';
import CarouselSimpleItem from '~/components/Carousel/components/CarouselSimpleItem';
import DefaultLayout from '~/layouts/DefaultLayout';
import "./_home.scss";
import HistorySearchItem from '~/components/HistorySearchItem';
import SubBanner from '~/components/SubBanner';

const Home = () => {

    const listCarouselImageFake = [
        "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
        "https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
        "https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
        "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=",
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o=",
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o=",
    ];

    const listVietNamTravelFake = [
        {
            img: "https://q-xx.bstatic.com/xdata/images/city/170x136/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o=",
            name: "Ho Chi Minh city",
            properties: 1000
        },
        {
            img: "https://r-xx.bstatic.com/xdata/images/city/170x136/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=",
            name: "Ha Noi",
            properties: 1250
        },
        {
            img: "https://q-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=",
            name: "Da Nang",
            properties: 843
        },
        {
            img: "https://q-xx.bstatic.com/xdata/images/city/170x136/688866.jpg?k=fc9d2cb9fe2f6d1160e10542cd2b83f5a8008401d33e8750ee3c2691cf4d4f7e&o=",
            name: "Hoi An",
            properties: 345
        },
        {
            img: "https://r-xx.bstatic.com/xdata/images/city/170x136/781588.jpg?k=11df01b67f649ffe1aec4e8697488b97807e94430045132f5f066f2aad58614e&o=",
            name: "Ho Tram",
            properties: 245
        },
        {
            img: "https://q-xx.bstatic.com/xdata/images/city/170x136/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o=",
            name: "Phu Quoc",
            properties: 3546
        },
        {
            img: "https://q-xx.bstatic.com/xdata/images/city/170x136/688879.jpg?k=82ca0089828054a1a9c46b14ea7f1625d73d42505ae58761e8bcc067f9e72475&o=",
            name: "Nha Trang",
            properties: 857
        },
        {
            img: "https://q-xx.bstatic.com/xdata/images/city/170x136/954860.jpg?k=3f3d9e49e99ec709f07e6262977d87dea956b24801748b5925891083ddb8a9d1&o=",
            name: "Phan Thiet",
            properties: 236
        },
        {
            img: "https://r-xx.bstatic.com/xdata/images/city/170x136/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o=",
            name: "Vung Tau",
            properties: 636
        },
    ];

    // imgSrc={item.imgSrc}
    //                             name={item.name}
    //                             location={item.location}
    //                             isReview={item.isReview}
    //                             isSave={item.isSave}
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

    const historySearchFake = [1, 2, 3, 4];

    return (
        <div className='home__wrapper'>
            <DefaultLayout>
                <div className='home__content'>
                    <div className='home__recent__searches'>
                        <h5 className='home__recent__searches__title'>Your recent searches</h5>
                        <ul className='home__recent__searches__list'>
                            {[1, 2, 3].map((history, idx) => (
                                <li key={idx} className='home__recent__searches__item'>
                                    <HistorySearchItem />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <SubBanner />
                    <Carousel
                        type='image-only'
                        title="Go beyond your typical stay"
                        description='Based on your most recently viewed property'
                        items={listCarouselImageFake}
                        autoPlay={true}
                    />
                    <Carousel
                        type='image-title-desc'
                        title="Explore Vietnam"
                        description='These popular destinations have a lot to offer'
                        items={listVietNamTravelFake}
                        autoPlay={false}
                        slidesToShow={6}
                        arrowStyle={{ transform: "translateY(-30px) !important" }}
                    />
                    <Carousel
                        type='image-simple-component'
                        title="Recommended stays for you"
                        description='Based on your most recently viewed property'
                        items={listDataSimpleComponentFake}
                        autoPlay={false}
                    />
                    {/* <Carousel
                    type='image-only'
                    title="Go beyond your typical stay"
                    description='Based on your most recently viewed property'
                    items={listCarouselImageFake}
                    autoPlay={false}
                /> */}
                </div>
            </DefaultLayout>
        </div>
    )
}

export default Home
