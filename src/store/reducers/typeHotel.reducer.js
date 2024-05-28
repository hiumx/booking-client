import actionTypes from "../actions/action.type";

const initState = {
    typesHotel: []
}

const typeHotelReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_TYPE_HOTEL_SUCCESS:
            state.typesHotel = action.typesHotel
            return {
                ...state
            }
        case actionTypes.GET_TYPE_HOTEL_FAIL:
            state.typesHotel = [];
            return {
                ...state
            }
        default:
            return state;
    }
}

export default typeHotelReducer;