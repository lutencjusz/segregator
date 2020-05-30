import {combineReducers} from 'redux';
import counter from './counter.reducer';
import button from './button.reducer';


const rootReducer = combineReducers({
    counter,
    button,
})

export default rootReducer;