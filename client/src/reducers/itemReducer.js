import { GET_LISTS, ADD_LIST, DELETE_LIST, LISTS_LOADING } from '../actions/types';

const initialState = {
    lists: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LISTS:
            return {
                ...state,
                lists: action.payload,
                loading: false
            };
        case DELETE_LIST:
            return {
                ...state,
                lists: state.lists.filter(list => list._id !== action.payload)
            };
        case ADD_LIST:
            return {
                ...state,
                lists: [action.payload, ...state.lists]
            };
        case LISTS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;

    }
}