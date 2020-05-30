import {
    SET_COUNTER,
} from '../constants';

export const setCounter = (counter, min=0, max=10) => {
    const objResult = {
        type: SET_COUNTER,
        payload: counter,
    }
    if (counter < min) {
        objResult.payload = min;
        objResult.message = "Licznik osiągnął minimum!"
    } else if (counter > max) {
        objResult.payload = max;
        objResult.message = "Licznik osiągnął maximum!"
    }
    return objResult;
}
