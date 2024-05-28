
import "./_banner.scss";
import SearchInput from '../SearchInput';

const Banner = () => {

    return (
        <div className='banner__wrapper'>
            <h1>Find your next stay</h1>
            <h5>Search low prices on hotels, homes and much more...</h5>

            <SearchInput style={{ top: '188px' }} />
        </div>
    )
}

export default Banner
