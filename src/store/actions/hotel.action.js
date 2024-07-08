
import { getDataSearchHotel } from '~/services/search.service';
import actionTypes from './action.type'
import { filterByType } from '~/utils/search';
import { getHotelByManagerId, getTopHotel } from '~/services/hotel.service';

export const getResultSearchHotel = (payload) => async (dispatch) => {
    try {
        const response = await getDataSearchHotel(payload);
        if (response && response.code === 1000) {
            dispatch({
                type: actionTypes.GET_LIST_SEARCH_HOTEL_SUCCESS,
                listSearchHotel: response.metadata
            })
        } else {
            dispatch({
                type: actionTypes.GET_LIST_SEARCH_HOTEL_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_LIST_SEARCH_HOTEL_FAIL
        })
        console.error(error);
    }
}

export const getTopHotels = () => async (dispatch) => {
    try {
        const response = await getTopHotel();
        if (response && response.code === 1000) {
            dispatch({
                type: actionTypes.GET_TOP_HOTEL_SUCCESS,
                topHotels: response.metadata
            })
        } else {
            dispatch({
                type: actionTypes.GET_TOP_HOTEL_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_TOP_HOTEL_FAIL
        })
        console.error(error);
    }
}

export const getHotelsByManagerId = (managerId) => async (dispatch) => {
    try {
        const response = await getHotelByManagerId(managerId);
        console.log(response);
        if (response && response.code === 1000) {
            dispatch({
                type: actionTypes.GET_HOTEL_BY_MANAGER_ID_SUCCESS,
                hotelsByManager: response.metadata
            })
        } else {
            dispatch({
                type: actionTypes.GET_HOTEL_BY_MANAGER_ID_SUCCESS_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_HOTEL_BY_MANAGER_ID_SUCCESS_FAIL
        })
        console.error(error);
    }
}

export const getResultFilterHotel = ({ type, payload }) => async (dispatch) => {
    dispatch({
        type: actionTypes.GET_LIST_FILTER_HOTEL_SUCCESS,
        listSearchHotel: filterByType({type, payload})
    });
}
