import { getTopProvince } from "~/services/province.service";
import actionTypes from "./action.type";

export const getTopProvinces = () => async (dispatch) => {
    try {
        const response = await getTopProvince();
        if (response && response.code === 1000) {
            dispatch({
                type: actionTypes.GET_TOP_PROVINCES_SUCCESS,
                topProvinces: response.metadata
            })
        } else {
            dispatch({
                type: actionTypes.GET_TOP_PROVINCES_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_TOP_PROVINCES_FAIL
        })
        console.error(error);
    }
}