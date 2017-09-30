import { fork, call, put, take } from 'redux-saga/effects';
import registerSagas from './register';
import { logError } from '../../../utils/errorLog';
import ConstantBuilder from '../../constantBuilder';
import ActionBuilder from '../../actionBuilder';
import {getLocalStorageItem } from '../../../dataStorage/asyncStorage';

const checkUserAuthentication = function* checkUserAuthentication() {

    try {

        while (true) {

            yield take(ConstantBuilder("AUTH", "CHECK_USER_AUTHENTICAION"));
            let userData = yield call(getLocalStorageItem, "user");
            let isAuthorized = false;
            
            if(userData) {

                userData = JSON.parse(userData);
                isAuthorized = userData.isAuthorized; 
            }

            yield put(ActionBuilder("ROOT", "SETSTATE", { data: { 'isAuthorized': isAuthorized, 'stateReady': true } }));
        }
    }
    catch (e) {

        logError(e);
    }
}

const saga = function* authRootSagas() {

    yield [
        fork(registerSagas),
        fork(checkUserAuthentication),
    ]
}

export default saga;  