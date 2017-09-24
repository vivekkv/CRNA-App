import { take, fork, select, call, put } from 'redux-saga/effects';
import ActionBuilder from '../../../actionBuilder';
import ConstantBuilder from '../../../constantBuilder';
import { bindInputChange } from '../../../reducerStateMiddleware';
import { logError } from '../../../../utils/errorLog';
import { Map } from 'immutable';

const getStateData = (state) => Map(state.auth.register.get("data"));

const registerSaga = function* register() {

    while (true) {

        yield take(ConstantBuilder("AUTH", "REGISTER"));
        alert();

    }
}

const registerComponentInputChange = function* inputChange() {

    try { 

        while (true) {

            const { name, value } = yield take(ConstantBuilder("AUTH", "REGISTER_ON_INPUT_CHANGE"));

            let formData = yield select(getStateData);
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
            
            fork(registerComponentInputChange)
        ]
    }
    catch (e) {

        logError(e);
    }
}

export default saga;