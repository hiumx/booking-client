import actionTypes from "../actions/action.type";

const initState = {
    userMyInfo: {},
    userBookingInfo: {},
    historySearch: [],
    hotelWishList: []
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_INFO_USER_SUCCESS:
            state.userMyInfo = action.userInfo
            return {
                ...state
            }
        case actionTypes.GET_INFO_USER_FAIL:
            state.userMyInfo = {};
            return {
                ...state
            }
        case actionTypes.SET_BOOKING_USER_INFO_SUCCESS:
            state.userBookingInfo = action.userBookingInfo
            return {
                ...state
            }
        case actionTypes.SET_BOOKING_USER_INFO_SUCCESS_FAIL:
            state.userBookingInfo = {};
            return {
                ...state
            }
        case actionTypes.GET_HISTORY_SEARCH_SUCCESS:
            state.historySearch = action.historySearch
            return {
                ...state
            }
        case actionTypes.GET_HISTORY_SEARCH_FAIL:
            state.historySearch = [];
            return {
                ...state
            }
        case actionTypes.GET_WISH_LIST_SUCCESS:
            state.hotelWishList = action.hotelWishList
            return {
                ...state
            }
        case actionTypes.GET_WISH_LIST_FAIL:
            state.hotelWishList = [];
            return {
                ...state
            }
        default:
            return state;
    }
}

export default userReducer;