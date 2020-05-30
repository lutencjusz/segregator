import {
    SET_DICTIONARY,
} from '../constants';

export const setDictionary = (Dictionary) => {
    return {
        type: SET_DICTIONARY,
        payload: Dictionary,
    };
}
