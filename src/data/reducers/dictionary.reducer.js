import {
    SET_DICTIONARY,
    SET_CATEGORIES,
    SET_SELECTED,
    SET_SELECTED_CATEGORIES,
    SET_CANDIDATES,
} from '../constants';

const initialState = {candidates: []} // musi być zainicjowane, żeby być tablicą

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
        case SET_SELECTED_CATEGORIES:
            return {
                ...state,
                selectedCategories: action.payload
            }
        case SET_CANDIDATES:
            return {
                ...state,
                candidates: action.payload
            }
        default:
            return state;
    }
}

export default dictionary;