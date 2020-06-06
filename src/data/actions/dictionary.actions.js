import {
    GET_DICTIONARY, SET_SELECTED, GET_CATEGORIES, SET_SELECTED_CATEGORIES, 
    GET_CANDIDATES, SET_SELECTED_CANDIDATE
} from '../constants';

export const setDictionary = (dictionary) => {
    return {
        type: GET_DICTIONARY,
        payload: dictionary,
    };
}

export const setCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        payload: categories,
    };
}

export const setSelectedCategories = (selectedCategories) => {
    return {
        type: SET_SELECTED_CATEGORIES,
        payload: selectedCategories,
    };
}

export const setSelectedCandidate = (selectedCandidate) => {
    return {
        type: SET_SELECTED_CANDIDATE,
        payload: selectedCandidate,
    };
}

export const setCandidates = (cadidate) => {
    return {
        type: GET_CANDIDATES,
        payload: cadidate,
    };
}

export const setSelected = (selected) => {
    const objResult = {
        type: SET_SELECTED,
        payload: selected,
    }

    if (objResult.payload?.customOption) {
        objResult.message = `Nie znalazłem "${objResult.payload.name}" w słowniku. Zgłosiłem nową wpis...`
    }


    // console.log({ objResult })
    return objResult;
}
