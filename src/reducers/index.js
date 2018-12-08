import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errReducer';
import itemReducer from './itemReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    item: itemReducer
})