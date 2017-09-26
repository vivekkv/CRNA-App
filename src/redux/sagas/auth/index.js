import { fork } from 'redux-saga/effects';
import registerSagas from './register';
import userInfo from './userInfo';

const saga = function* authRootSagas() {

    yield [
        fork(registerSagas),
        fork(userInfo)
    ] 
}

export default saga;  