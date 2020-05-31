import {
    SET_DICTIONARY,
    SET_SELECTED,
} from '../constants';

const initialState = {
    dictionary: [
        { id: 1, name: 'John', categoryId: 1 },
        { id: 2, name: 'Miles', categoryId: 2 },
        { id: 3, name: 'Charles', categoryId: 3 },
        { id: 4, name: 'Herbie', categoryId: 4 },
    ],
    categories: [
        { id: 1, name: 'Bio', image: 'https://lutencjusz-segregator.s3-eu-west-1.amazonaws.com/bio.png' },
        { id: 2, name: 'Gabaryty', image: 'https://lutencjusz-segregator.s3-eu-west-1.amazonaws.com/gabaryty.png' },
        { id: 3, name: 'Papier', image: 'https://lutencjusz-segregator.s3-eu-west-1.amazonaws.com/papier.png' },
        { id: 4, name: 'Szkło', image: 'https://lutencjusz-segregator.s3-eu-west-1.amazonaws.com/szklo.png' },
        { id: 5, name: 'Tworzywa sztuczne', image: 'https://lutencjusz-segregator.s3-eu-west-1.amazonaws.com/tworzywa_sztuczne.png' },
        { id: 6, name: 'Zmieszane', image: 'https://lutencjusz-segregator.s3-eu-west-1.amazonaws.com/zmieszne.png' },
    ],
    selected: 1
}

function dictionary(state = initialState, action) {
    switch (action.type) {
        case SET_DICTIONARY:
            return {
                ...state,
                dictionary: action.payload
            }
        case SET_SELECTED:
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state;
    }
}

export default dictionary;