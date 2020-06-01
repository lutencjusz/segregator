import {
    SET_DICTIONARY,
    SET_CATEGORIES,
    SET_SELECTED,
} from '../constants';

const initialState = {}

function dictionary(state = initialState, action) {

    switch (action.type) {
        case SET_DICTIONARY:
            return {
                ...state,
                dictionary: action.payload
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case SET_SELECTED:
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state;
    }
}

export default dictionary;