import { combineReducers } from 'redux';
import core from './core';

export default () => {
    return combineReducers({
        'core': core
    });
} 