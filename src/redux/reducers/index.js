import { combineReducers } from 'redux';
import core from './core';
import auth from './auth';
import user from './user';
import nav from './nav';

export default function (navigationReducer) {

    return combineReducers({
        'core': core,
        'auth': auth,
        'user': user,
        'nav': navigationReducer
    });
}