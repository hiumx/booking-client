
import actionTypes from './action.type'
import { getRoomById } from '~/services/room.service';

export const getRoomInfo = (rid) => async (dispatch) => {
    try {
        const response = await getRoomById(rid);
        if (response && response.code === 1000) {
            dispatch({
                type: actionTypes.GET_ROOM_INFO_SUCCESS,
                roomInfo: response.metadata
            })
        } else {
            dispatch({
                type: actionTypes.GET_ROOM_INFO_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ROOM_INFO_FAIL
        })
        console.error(error);
    }
}
