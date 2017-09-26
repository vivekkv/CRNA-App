import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import register from './register';
import userInfo from './userInfo';

export default combineReducers({
    'register': register,
    'userInfo': userInfo
})