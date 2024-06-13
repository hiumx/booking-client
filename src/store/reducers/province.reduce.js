import actionTypes from "../actions/action.type";

const initState = {
    topProvinces: [],
}

const provinceReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_TOP_PROVINCES_SUCCESS:
            state.topProvinces = action.topProvinces
            return {
                ...state
            }
        case actionTypes.GET_TOP_PROVINCES_FAIL:
            state.topProvinces = [];
            return {
                ...state
            }
        default:
            return state;
    }
}

export default provinceReducer;