import React from 'react'
import "./_search_result.scss";
import Header from '~/layout/components/Header';
import SearchInput from '~/components/SearchInput';
import HotelResultItem from '~/components/HotelResultItem';

const SearchResult = () => {
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
						Left
					</div>
					<div className='col-lg-9'>
						<h5 className='sr__body__num__found'>Hoi An: 633 properties found</h5>
						<select>
							<option>Price (lowest first)</option>
							<option>Property rating (high to low)</option>
						</select>
						<HotelResultItem />
						<HotelResultItem />
						<HotelResultItem />
						<HotelResultItem />
						<HotelResultItem />
						<HotelResultItem />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchResult
