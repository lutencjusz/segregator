import {
    SET_DICTIONARY,
} from '../constants';

const initialState = {
    dictionary: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Miles' },
        { id: 3, name: 'Charles' },
        { id: 4, name: 'Herbie' },
      ],
}

function dictionary(state = initialState, action) {
    switch (action.type) {
        case SET_DICTIONARY:
            return {
                ...state,
                dictionary: action.payload
            }
        default:
            return state;
    }
}

export default dictionary;