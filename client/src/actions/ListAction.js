import { GET_LISTS, ADD_LIST, DELETE_LIST } from './types';

export const getLists = () => {
    return {
        type: GET_LISTS
    };
};

export const deleteList = (id) => {
    return {
        type: DELETE_LIST,
        payload: id
    };
};