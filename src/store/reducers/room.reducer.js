import actionTypes from "../actions/action.type";

const initState = {
    roomInfo: [],
}

const provinceReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_ROOM_INFO_SUCCESS:
            state.roomInfo = action.roomInfo
            return {
                ...state
            }
        case actionTypes.GET_ROOM_INFO_FAIL:
            state.roomInfo = [];
            return {
                ...state
            }
        default:
            return state;
    }
}

export default provinceReducer;