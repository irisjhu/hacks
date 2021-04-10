import * as api from '../api';

// Action Creators
export const getExample = () => async (dispatch) => {
    try {
        const { data } = await api.getExample();

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error);
    }
}