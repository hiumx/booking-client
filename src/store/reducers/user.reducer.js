import actionTypes from "../actions/action.type";

const initState = {
    userMyInfo: {}
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
        default:
            return state;
    }
}

export default userReducer;