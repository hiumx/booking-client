
import { getAllConvenient } from '~/services/convenient.service';
import actionTypes from './action.type'

export const getConvenient = () => async (dispatch) => {
    try {
        const response = await getAllConvenient();
        if (response && response?.code === 1000) {
            console.log(response.metadata);
            dispatch({
                type: actionTypes.GET_CONVENIENT_SUCCESS,
                convenient: response.metadata
            })
        } else {
            dispatch({
                type: actionTypes.GET_CONVENIENT_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CONVENIENT_FAIL
        })
        console.error(error);
    }
}
