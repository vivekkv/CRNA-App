import { combineReducers } from 'redux';
import core from './core';
import auth from './auth';

export default () => {

    return combineReducers({

        'core': core,
        'auth': auth

    });
} 