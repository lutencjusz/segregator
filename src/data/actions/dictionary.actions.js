import {
    SET_DICTIONARY, SET_SELECTED, SET_CATEGORIES, SET_SELECTED_CATEGORIES
} from '../constants';

export const setDictionary = (dictionary) => {
    return {
        type: SET_DICTIONARY,
        payload: dictionary,
    };
}

export const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        payload: categories,
    };
}

export const setSelectedCategories = (selectedCategories) => {
    return {
        type: SET_SELECTED_CATEGORIES,
        payload: selectedCategories,
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
