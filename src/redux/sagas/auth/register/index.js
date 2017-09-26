import { take, fork, select, call, put } from 'redux-saga/effects';
import ActionBuilder from '../../../actionBuilder';
import ConstantBuilder from '../../../constantBuilder';
import { bindInputChange } from '../../../reducerStateMiddleware';
import { logError } from '../../../../utils/errorLog';
import { registerNewUser } from '../../../services/auth';
import { setLocalStorageItem } from '../../../../dataStorage/asyncStorage';
import { Map } from 'immutable';

const getStateData = (state) => Map(state.auth.register.get("data"));

const registerSaga = function* registerSaga() {

    try {

        while (true) {

            yield take(ConstantBuilder("AUTH", "REGISTER"));

            let state = yield select(getStateData);
            let response = yield call(registerNewUser, {
                'FirstName': state.get("FirstName"),
                'Dob': state.get("Dob"),
                'SchoolCode': state.get("SchoolCode"),
            });

            if (response.success) {

                yield call(setLocalStorageItem, "user_token", response.user_token);
                yield call(setLocalStorageItem, "isAuthorized", true);
                yield put(ActionBuilder("AUTH", "USER_INFO_SET_ITEM", { data: { 'isAuthorized': true, 'user_token': response.user_token } }));

            } else {

                logError(response.error);
            }

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
            fork(registerComponentInputChange)
        ]
    }
    catch (e) {

        logError(e);
    }
}

export default saga;