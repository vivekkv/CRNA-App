import { take, fork, select, call, put } from 'redux-saga/effects';
import ActionBuilder from '../../../actionBuilder';
import ConstantBuilder from '../../../constantBuilder';
import { bindInputChange } from '../../../reducerStateMiddleware';
import { logError } from '../../../../utils/errorLog';
import { registerNewUser, getSchoolBaseUrlBySchoolCode } from '../../../services/auth';
import { setLocalStorageItem, clearStorage } from '../../../../dataStorage/asyncStorage';
import { NavigationActions } from 'react-navigation';
import { Map } from 'immutable';

const getStateData = (state) => Map(state.auth.register.get("data"));

const registerSaga = function* registerSaga() {

    try {

        while (true) {

            const { navigate } = yield take(ConstantBuilder("AUTH", "REGISTER"));
            let state = yield select(getStateData);
            let baseUrl = yield call(getSchoolBaseUrlBySchoolCode, state.get("SchoolCode"));

            let response = yield call(registerNewUser, baseUrl, {
                'FirstName': state.get("FirstName"),
                'Dob': state.get("Dob"),
                'SchoolCode': state.get("SchoolCode"),
            });

            if (response.success) {

                yield call(setLocalStorageItem, "userInfo", JSON.stringify({ "isAuthorized": true, "token": response.user_token }));
                yield put(ActionBuilder("AUTH", "USER_INFO_SET_ITEM", { data: { 'isAuthorized': true, 'user_token': response.user_token } }));
                yield put(ActionBuilder("AUTH", "REGISTER_CLEARFORM"));

            } else {
 
                logError(response.error);
            }  
        }
    }
    catch (e) {

        logError(e)
    }
}

const logOffSaga = function* logOffSaga() {

    try {

        while (true) {

            yield take(ConstantBuilder("AUTH", "LOGOFF"));
            yield call(clearStorage, "userInfo");
            yield put(ActionBuilder("AUTH", "USER_INFO_SET_ITEM", { data: { 'isAuthorized': false, 'user_token': null } }));
            yield put(ActionBuilder("AUTH", "USER_INFO_SET_ITEM", { data: { 'isAuthorized': false, 'user_token': null } }));
        }
    }
    catch (e) {

        logError(e)
    }
}

const registerComponentInputChange = function* inputChange() {

    try {

        while (true) {

            const { name, value } = yield take(ConstantBuilder("AUTH", "REGISTER_ON_INPUT_CHANGE"));

            let state = yield select(getStateData);
            let callbacks = [];
            let data = yield call(bindInputChange, callbacks, name, value);

            yield put(ActionBuilder("AUTH", "REGISTER_SET_FORM", { data }));

        }
    }
    catch (e) {

        logError(e);
    }
}

const saga = function* registerSagas() {

    try {
        yield [
            fork(registerSaga),
            fork(registerComponentInputChange),
            fork(logOffSaga)
        ]
    }
    catch (e) {

        logError(e);
    }
}

export default saga;