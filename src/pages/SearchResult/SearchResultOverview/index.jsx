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
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getResultSearchHotel } from '~/store/actions/hotel.action';
import { CONTACTS, FILTER_ITEMS, LIST_FAKE_NUMBER, LIST_RATING } from '~/constants';
import HotelItemLoader from '~/components/MyLoader/components/HotelItemLoader';
import Select from 'react-select';
import Contact from '~/layouts/components/Contact';
import Footer from '~/layouts/components/Footer';
import actionTypes from '~/store/actions/action.type';
import { filterHotelByChecked } from '~/services/search.service';

const SearchResultOverview = () => {

	const dispatch = useDispatch();
	const typesHotel = useSelector(state => state.typeHotel.typesHotel);
	const convenient = useSelector(state => state.convenient.convenient);
	const hotelData = useSelector(state => state.hotel.listSearchHotel);
	const [isNotFound, setIsNotFound] = useState(false);
	const [listTypeChecked, setListTypeChecked] = useState([]);
	const [listConvenientChecked, setListConvenientChecked] = useState([]);
	const [rangePrice, setRangePrice] = useState([0, 1000]);
	const [listRating, setListRating] = useState([]);

	const items = FILTER_ITEMS;

	const currentLocation = useLocation();
	const parsed = queryString.parse(currentLocation.search);

	const numberOfNights = (new Date(parsed.endDate).getDate()) - (new Date(parsed.startDate).getDate());
	const numberOfAdults = parsed.adult;

	const options = [
		{ value: 'price_lowest', label: 'Price (lowest first)' },
		{ value: 'price_highest', label: 'Price rating (highest first)' },
		{ value: 'rating_high', label: 'Property rating (high to low)' },
		{ value: 'rating_low', label: 'Property rating (high to low)' },
		{ value: 'home_department', label: 'Home & department first' },
		{ value: 'distance_center', label: 'Distance from center' },
		{ value: 'top_review', label: 'Top reviews' },
	];

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			borderRadius: '12px',
			boxShadow: state.isFocused ? '0 0 0 1px blue' : 'none'
		})
	}

	const handleChangCheckedFilter = ({ idCheck = 0, typeCheckbox, rangePrice = [] }) => {
		switch (typeCheckbox) {
			case "type_hotel":
				if (listTypeChecked.includes(idCheck))
					setListTypeChecked(listTypeChecked.filter(t => t !== idCheck))
				else
					setListTypeChecked(prev => [...prev, idCheck]);
				break;
			case "convenient":
				if (listConvenientChecked.includes(idCheck))
					setListConvenientChecked(listConvenientChecked.filter(c => c !== idCheck));
				else
					setListConvenientChecked(prev => [...prev, idCheck]);
				break;
			case "price_range":
				setRangePrice(rangePrice);
				break;
			case "rating":
				if (listRating.includes(idCheck))
					setListRating(listRating.filter(rate => rate !== idCheck))
				else
					setListRating(prev => [...prev, idCheck]);
				break;
			default:
				throw new Error("Type of check filter invalid!");
		}
	}

	useEffect(() => {
		dispatch(getTypesHotel());
		dispatch(getConvenient());
		setListTypeChecked(Number(parsed?.typeChecked) ? [...listTypeChecked, Number(parsed?.typeChecked)] : []);
	}, []);

	console.log(listTypeChecked);

	useEffect(() => {
		const { startDate, endDate, room, location, name } = parsed;
		filterHotelByChecked({
			startDate: new Date(startDate),
			endDate: new Date(endDate),
			location,
			name,
			numberOfRoom: room,
			checksType: listTypeChecked,
			checksConvenient: listConvenientChecked,
			lowestPrice: rangePrice[0],
			highestPrice: rangePrice[1],
			checkRating: listRating,
		}).then(res => {
			if (res.code === 1000)
				dispatch({
					type: actionTypes.GET_LIST_SEARCH_HOTEL_SUCCESS,
					listSearchHotel: res.metadata
				});
		}).catch(error => {
			console.error(error);
		})
	}, [listTypeChecked, listConvenientChecked, rangePrice]);

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

	// useEffect(() => {


	// 	const { location, startDate, endDate, adult, children, room } = parsed;
	// 	const payload = {
	// 		location,
	// 		startDate: new Date(startDate),
	// 		endDate: new Date(endDate),
	// 		options: {
	// 			adult, children, room
	// 		}
	// 	}
	// 	setTimeout(() => {
	// 		dispatch(getResultSearchHotel(payload));
	// 	}, 800);
	// }, []);

	return (
		<div className='search__result__wrapper'>
			<Header style={{ padding: '0 14%' }} />

			<div className='sr__search__input__wrapper'>
				<SearchInput style={{ top: '10px', padding: '0 14%' }} searchValue={parsed} setIsNotFound={setIsNotFound} />
			</div>

			<div className='sr__body'>
				<p className='sr__body__title'>Search results</p>
				<div className='row sr__body__desc'>
					<div className='col-lg-3'>
						<div className='sr__body__filter__wrapper'>
							<h3 className='sr__body__filter__by'>Filter by:</h3>
							<Filter
								title='Your previous filters'
								items={items.previousFilter}
								handleChangCheckedFilter={handleChangCheckedFilter}
							/>
							<Filter
								title='Your budget'
								isList={false}
								typeCheckbox='price_range'
								handleChangCheckedFilter={handleChangCheckedFilter}
							/>
							<Filter
								title='Popular filters'
								items={items.popularFilter}
								handleChangCheckedFilter={handleChangCheckedFilter}
							/>
							<Filter
								title='Property type'
								typeCheckbox="type_hotel"
								items={typesHotel}
								listChecked={listTypeChecked}
								handleChangCheckedFilter={handleChangCheckedFilter}
							/>
							<Filter
								title='Property rating'
								typeCheckbox="rating"
								items={LIST_RATING}
								handleChangCheckedFilter={handleChangCheckedFilter}
							/>
							<Filter
								title='Convenient filters'
								typeCheckbox="convenient"
								items={convenient}
								handleChangCheckedFilter={handleChangCheckedFilter}
							/>
						</div>
					</div>
					<div className='col-lg-9'>

						<h5
							className='sr__body__num__found'
						>
							{`${parsed.location ? parsed.location : parsed.name}: ${hotelData.length} properties found`}
						</h5>
						<Select
							options={options}
							className='sr__body__sort'
							styles={customStyles}
						// defaultValue={"home_department"}
						/>

						<ul className='sr__list__result'>
							{hotelData?.length > 0 ? hotelData?.map((hotel, idx) => (
								<li key={idx}>
									<HotelResultItem data={hotel} options={{ numberOfNights, numberOfAdults }} />
								</li>
							))
								: (isNotFound ?
									<p className='sr__result__not__found'>{`Not found any result for "${parsed?.location}"`}</p>
									:
									<div className='sr__result__list__loader'>
										{LIST_FAKE_NUMBER.map((item, idx) => (
											<HotelItemLoader key={idx} />
										))}
									</div>
								)
							}
						</ul>
					</div>
				</div>
			</div>

			<Contact contacts={CONTACTS} />
			<Footer />
		</div>
	)
}

export default SearchResultOverview
