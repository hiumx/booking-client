
import { getTypeHotel } from '~/services/typeHotel.service';
import actionTypes from './action.type'

export const getTypesHotel = () => async (dispatch) => {
    try {
        const response = await getTypeHotel();
        if (response && response.code === 1000) {
            dispatch({
                type: actionTypes.GET_TYPE_HOTEL_SUCCESS,
                typesHotel: response.metadata
            })
        } else {
            dispatch({
                type: actionTypes.GET_TYPE_HOTEL_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_TYPE_HOTEL_FAIL
        })
        console.error(error);
    }
}
