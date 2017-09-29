import { combineReducers } from 'redux';
import core from './core';
import auth from './auth';
import user from './user';

export default () => {

    return combineReducers({
        'core': core,
        'auth': auth,
        'user': user
    });
} 