import React, { useEffect, useState } from 'react'
import "./_search_result_overview.scss";
import Header from '~/layouts/components/Header';
import SearchInput from '~/components/SearchInput';
import HotelResultItem from '~/components/HotelResultItem';
import Filter from '~/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getTypesHotel } from '~/store/actions/typeHotel.action';
import { getConvenient } from '~/store/actions/convenient.action';
import { ArrowUpDownIcon } from '~/components/Icons';
import HashLoader from "react-spinners/HashLoader";
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getResultSearchHotel } from '~/store/actions/hotel.action';
import { FILTER_ITEMS } from '~/constants';

const SearchResultOverview = () => {

	const dispatch = useDispatch();
	const typesHotel = useSelector(state => state.typeHotel.typesHotel);
	const convenient = useSelector(state => state.convenient.convenient);
	const hotelData = useSelector(state => state.hotel.listSearchHotel);
	const [isNotFound, setIsNotFound] = useState(false);

	const items = FILTER_ITEMS;

	const location = useLocation();
	const parsed = queryString.parse(location.search);

	const numberOfNights = (new Date(parsed.endDate).getDate()) - (new Date(parsed.startDate).getDate());
	const numberOfAdults = parsed.adult;

	useEffect(() => {
		let timerId = setTimeout(() => {
			if (hotelData.length === 0) {
				setIsNotFound(true);
			}
		}, 1000);

		return () => {
			clearTimeout(timerId);
		}
	}, [isNotFound, hotelData]);

	useEffect(() => {
		dispatch(getTypesHotel());
		dispatch(getConvenient());

		const { location, startDate, endDate, adult, children, room } = parsed;
		const payload = {
			location,
			startDate: new Date(startDate),
			endDate: new Date(endDate),
			options: {
				adult, children, room
			}
		}
		dispatch(getResultSearchHotel(payload));
	}, []);

	console.log(hotelData);

	return (
		<div className='search__result__wrapper'>
			<Header style={{ padding: '0 14%' }} />
			<div className='sr__search__input__wrapper'>
				<SearchInput style={{ top: '10px', padding: '0 14%' }} searchValue={parsed} setIsNotFound={setIsNotFound}/>
			</div>
			<div className='sr__body'>
				<p className='sr__body__title'>Search results</p>
				<div className='row sr__body__desc'>
					<div className='col-lg-3'>
						<div className='sr__body__filter__wrapper'>
							<h3 className='sr__body__filter__by'>Filter by:</h3>
							<Filter title='Your previous filters' items={items.previousFilter} />
							<Filter title='Your budget' isList={false} />
							<Filter title='Popular filters' items={items.popularFilter} />
							<Filter title='Property type' items={typesHotel} />
							<Filter title='Convenient filters' items={convenient} />
						</div>
					</div>
					<div className='col-lg-9'>
						<h5 className='sr__body__num__found'>{`${parsed.location}: ${hotelData.length} properties found`}</h5>
						<div className='sr__body__sort'>
							<ArrowUpDownIcon width='14px' height='14px' fill='#1a1a1a' />
							<select className='sr__body__sort__select'>
								<option>Our top picks</option>
								<option>Price (lowest first)</option>
								<option>Property rating (high to low)</option>
							</select>
						</div>
						<ul className='sr__list__result'>
							{hotelData?.length > 0 ? hotelData?.map((hotel, idx) => (
								<li key={idx}>
									<HotelResultItem data={hotel} options={{numberOfNights, numberOfAdults}}/>
								</li>
							))
								: (isNotFound ?
									<p className='sr__result__not__found'>{`Not found any result for "${parsed?.location}"`}</p>
									:
									<HashLoader
										color="#e89fe8"
										loading={true}
										className='sr__loader'
										size={40}
										aria-label="Loading Spinner"
										data-testid="loader"
									/>
								)
							}

						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchResultOverview
