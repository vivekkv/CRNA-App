import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import dashboard from './dashboard';

export default combineReducers({
    'dashboard': dashboard
})