import {combineReducers} from 'redux';
import dictionary from './dictionary.reducer';

const rootReducer = combineReducers({
    dictionary,
})

export default rootReducer;