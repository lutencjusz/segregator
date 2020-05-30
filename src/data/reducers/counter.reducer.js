import {SET_COUNTER} from '../constants';

const initialState = {
    counter: 0,
}

function counter(state = initialState, action) {
    switch (action.type) {
        case SET_COUNTER:
            return {
                ...state,
                counter: action.payload
            }    
        default:
            return state;        
    }
}

export default counter;