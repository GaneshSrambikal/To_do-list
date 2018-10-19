import { GET_LISTS, ADD_LIST, DELETE_LIST } from './types';

export const getLists = () => {
    return {
        type: GET_LISTS
    };
};