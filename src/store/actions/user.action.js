
import { getUserMyInfo } from '~/services/user.service';
import actionTypes from './action.type'

export const getMyInfo = () => {
    return async (dispatch) => {
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
            console.log(error);
        }
    }
}