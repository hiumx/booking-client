import actionTypes from "../actions/action.type";

const initState = {
    listSearchHotel: [],
    topHotels: []
}

const hotelReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST_SEARCH_HOTEL_SUCCESS:
            state.listSearchHotel = action.listSearchHotel
            return {
                ...state
            }
        case actionTypes.GET_LIST_SEARCH_HOTEL_FAIL:
            state.listSearchHotel = [];
            return {
                ...state
            }
        case actionTypes.GET_TOP_HOTEL_SUCCESS:
            state.topHotels = action.topHotels
            return {
                ...state
            }
        case actionTypes.GET_TOP_HOTEL_FAIL:
            state.topHotels = [];
            return {
                ...state
            }
        case actionTypes.GET_LIST_FILTER_HOTEL_SUCCESS:
            state.listSearchHotel = action.listSearchHotel;
            return {
                ...state
            }
        default:
            return state;
    }
}

export default hotelReducer;