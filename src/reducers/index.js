import {combineReducers} from 'redux';
import NasaReducer from './reducer_nasa';

const rootReducer = combineReducers({
    dataNASA: NasaReducer
});

export default rootReducer;