import { take, fork, select, call, put } from 'redux-saga/effects';
import registerSagas from './register';
import userInfo from './userInfo';
import { clearStorage } from '../../../dataStorage/asyncStorage'
import ConstantBuilder from '../../constantBuilder';
import ActionBuilder from '../../actionBuilder';

const authLogOff = function* authLogOff() {

    try {

        while (true) {

            yield take(ConstantBuilder("AUTH", "LOGOFF"));
            yield call(clearStorage);
            yield put(ActionBuilder("AUTH", "USER_INFO_SET_ITEM", { 'data': { 'isAuthorized': false, 'user_token': null } }));
            
        }
    }
    catch (e) {

        logError(e);
    }
}

const saga = function* authRootSagas() {

    yield [
        fork(registerSagas),
        fork(userInfo),
        fork(authLogOff)
    ] 
}

export default saga;  