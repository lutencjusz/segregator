import {
    SET_DICTIONARY, SET_SELECTED,
} from '../constants';

export const setDictionary = (Dictionary) => {
    return {
        type: SET_DICTIONARY,
        payload: Dictionary,
    };
}

export const setSelected = (selected) => {
    const objResult = {
        type: SET_SELECTED,
        payload: selected,
    }

    if (objResult.payload?.customOption){
        objResult.message = `Nie znalazłem "${objResult.payload.name}" w słowniku. Zgłosiłem nową wpis...`
    }
        

    console.log({ objResult })
    return objResult;
}
