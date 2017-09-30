import { combineReducers } from 'redux';
import auth from './auth';
import dashboard from './dashboard';
import root from './root';

export default function (navigationReducer) {

    return combineReducers({
        'root': root,
        'auth': auth,
        'nav': navigationReducer,        
        'dashboard': dashboard,
    });
    
}