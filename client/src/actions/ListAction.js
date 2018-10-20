import { GET_LISTS, ADD_LIST, DELETE_LIST, LISTS_LOADING } from './types';
import axios from 'axios';
export const getLists = () => dispatch => {
    dispatch(setListsLoading());
    axios
        .get('/api/lists')
        .then(res =>
            dispatch({
                type: GET_LISTS,
                payload: res.data
            })
        )
};


export const addList = list => dispatch => {
    axios
        .post('/api/lists', list)
        .then(res =>
            dispatch({
                type: ADD_LIST,
                payload: res.data
            })
        )
};

export const deleteList = id => dispatch => {
    axios.delete(`/api/lists/${id}`).then(res =>
    dispatch({
        type:DELETE_LIST,
        payload:id
    })
)
};



export const setListsLoading = () => {
    return {
        type: LISTS_LOADING
    }

}