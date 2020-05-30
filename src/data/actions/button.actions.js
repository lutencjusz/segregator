import {
    SET_MAX_STATE,
    SET_MIN_STATE
} from '../constants';

export const setMinState = (buttonState) => {
    return {
        type: SET_MIN_STATE,
        payload: buttonState,
    };
}

export const setMaxState = (buttonState) => {
    return {
        type: SET_MAX_STATE,
        payload: buttonState,
    };
}