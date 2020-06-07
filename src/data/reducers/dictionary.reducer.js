import {
    GET_DICTIONARY,
    SET_DICTIONARY,
    GET_CATEGORIES,
    SET_SELECTED,
    SET_SELECTED_CATEGORIES,
    GET_CANDIDATES,
    SET_SELECTED_CANDIDATE,
} from '../constants';

const initialState = { candidates: [], dictionary: [] } // musi być zainicjowane, żeby być tablicą

function dictionary(state = initialState, action) {

    switch (action.type) {
        case GET_DICTIONARY:
            return {
                ...state,
                dictionary: action.payload
            }
        case SET_DICTIONARY:
            return {
                ...state,
                dictionary: [...state.dictionary, action.payload]
            }
        case GET_CATEGORIES:
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
        case SET_SELECTED_CANDIDATE:
            return {
                ...state,
                selectedCandidate: action.payload
            }
        case GET_CANDIDATES:
            return {
                ...state,
                candidates: action.payload
            }
        default:
            return state;
    }
}

export default dictionary;