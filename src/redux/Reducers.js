import { combineReducers } from 'redux';
import snowHistoryReducer from './snow-history/Reducer';

const Reducers = combineReducers({
    snowHistoryReducer,
});

export default Reducers;