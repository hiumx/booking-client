import React, { useEffect, useState } from 'react'
import "./_search_result.scss";
import Header from '~/layouts/components/Header';
import SearchInput from '~/components/SearchInput';
import HotelResultItem from '~/components/HotelResultItem';
import Filter from '~/components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getTypesHotel } from '~/store/actions/typeHotel.action';
import { getConvenient } from '~/store/actions/convenient.action';
import { ArrowUpDownIcon } from '~/components/Icons';
import { getDataSearchHotel } from '~/services/hotel.service';
import HashLoader from "react-spinners/HashLoader";

const SearchResult = () => {

	const [hotelData, setHotelData] = useState([]);
	// const [loading, setLoading] = useState(true);

	const dispatch = useDispatch();
	const typesHotel = useSelector(state => state.typeHotel.typesHotel);
	const convenient = useSelector(state => state.convenient.convenient);



	const items = {
		previousFilter: [
			{
				name: "Hotels",
				quantity: 1311
			},
			{
				name: "Hot tub",
				quantity: 156
			},
			{
				name: "Balcony",
				quantity: 1365
			},
		],
		popularFilter: [
			{
				name: "No prepayment",
				quantity: 2315
			},
			{
				name: "Free cancellation",
				quantity: 422
			},
			{
				name: "4 stars",
				quantity: 136
			},
			{
				name: "Spa and wellness centre",
				quantity: 488
			},
		]
	}

	useEffect(() => {
		dispatch(getTypesHotel());
		dispatch(getConvenient());

		getDataSearchHotel()
			.then(res => {
				if (res?.code === 1000) {
					setTimeout(() => {
						setHotelData(res?.metadata);
					}, 850)
				}
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	return (
		<div className='search__result__wrapper'>
			<Header style={{ padding: '0 14%' }} />
			<div className='sr__search__input__wrapper'>
				<SearchInput style={{ top: '10px', padding: '0 14%' }} />
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
						<h5 className='sr__body__num__found'>Hoi An: 633 properties found</h5>
						<div className='sr__body__sort'>
							<ArrowUpDownIcon width='14px' height='14px' fill='#1a1a1a' />
							<select className='sr__body__sort__select'>
								<option>Our top picks</option>
								<option>Price (lowest first)</option>
								<option>Property rating (high to low)</option>
							</select>
						</div>
						<ul className='sr__list__result'>
							{hotelData.length > 0 ? hotelData?.map((hotel, idx) => (
								<li key={idx}>
									<HotelResultItem data={hotel} />

								</li>
							))
								:
								<HashLoader
									color="#e89fe8"
									loading={true}
									className='sr__loader'
									size={40}
									aria-label="Loading Spinner"
									data-testid="loader"
									
								/>
							}

						</ul>

					</div>
				</div>
			</div>



		</div>
	)
}

export default SearchResult
