
import { getHotelsSaveByUser, getUserMyInfo, saveHotelByUser } from '~/services/user.service';
import actionTypes from './action.type'
import { getTopRecentSearch } from '~/services/historySearch.service';

export const getMyInfo = () => async (dispatch) => {
    try {
        const response = await getUserMyInfo();
        if (response && response.code === 1000) {
            dispatch({
                type: actionTypes.GET_INFO_USER_SUCCESS,
                userInfo: response.metadata
            })
        } else {
            dispatch({
                type: actionTypes.GET_INFO_USER_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_INFO_USER_FAIL
        })
        console.error(error);
    }
}

export const getRecentSearch = (uid) => async (dispatch) => {
    try {
        const response = await getTopRecentSearch(uid);
        if (response && response.code === 1000) {
            dispatch({
                type: actionTypes.GET_HISTORY_SEARCH_SUCCESS,
                historySearch: response.metadata
            })
        } else {
            dispatch({
                type: actionTypes.GET_HISTORY_SEARCH_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_HISTORY_SEARCH_FAIL
        })
        console.error(error);
    }
}

export const takeHotelWishList = (payload) => async (dispatch) => {
    try {
        const response = await saveHotelByUser(payload);
        if (response && response.code === 1000) {
            dispatch({
                type: actionTypes.TAKE_WISH_LIST_SUCCESS,
            })
        } else {
            dispatch({
                type: actionTypes.TAKE_WISH_LIST_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.TAKE_WISH_LIST_FAIL
        })
        console.error(error);
    }
}

export const getHotelWishList = (uid) => async (dispatch) => {
    try {
        const response = await getHotelsSaveByUser(uid);
        if (response && response.code === 1000) {
            dispatch({
                type: actionTypes.GET_WISH_LIST_SUCCESS,
                hotelWishList: response.metadata
            })
        } else {
            dispatch({
                type: actionTypes.GET_WISH_LIST_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_WISH_LIST_FAIL
        })
        console.error(error);
    }
}
