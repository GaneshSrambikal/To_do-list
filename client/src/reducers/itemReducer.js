import uuid from 'uuid';
import { GET_LISTS, ADD_LIST, DELETE_LIST } from '../actions/types';

const initialState = {
    lists: [
        { id: uuid(), name: 'Gym' },
        { id: uuid(), name: 'Reading' },
        { id: uuid(), name: 'Coding' },
        { id: uuid(), name: 'Visit Dentist' }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LISTS:
            return {
                ...state
            }
        default:
            return state;

    }
}