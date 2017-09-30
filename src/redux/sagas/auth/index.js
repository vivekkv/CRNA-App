import { fork } from 'redux-saga/effects';
import registerSagas from './register';

const saga = function* authRootSagas() {

    yield [
        fork(registerSagas),
    ]
}

export default saga;  