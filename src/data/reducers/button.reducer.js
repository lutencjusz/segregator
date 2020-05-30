import {
    SET_MIN_STATE,
    SET_MAX_STATE

} from '../constants';

const initialState = {
    minButtonActive: true,
    maxButtonActive: true,
}

function button(state = initialState, action) {
    switch (action.type) {
        case SET_MIN_STATE:
            return {
                ...state,
                minButtonActive: action.payload
            }
        case SET_MAX_STATE:
            return {
                ...state,
                maxButtonActive: action.payload
            }
        default:
            return state;
    }
}

export default button;