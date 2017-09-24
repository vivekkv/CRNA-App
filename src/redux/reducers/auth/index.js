import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import register from './register';

export default combineReducers({
    'register': register
})