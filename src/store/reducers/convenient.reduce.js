import actionTypes from "../actions/action.type";

const initState = {
    convenient: []
}

const convenientReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CONVENIENT_SUCCESS:
            state.convenient = action.convenient
            return {
                ...state
            }
        case actionTypes.GET_CONVENIENT_FAIL:
            state.convenient = [];
            return {
                ...state
            }
        default:
            return state;
    }
}

export default convenientReducer;