import { fork } from 'redux-saga/effects';
import Auth from './auth';

const rootSaga = function* root() {

    yield [
        fork(Auth)
    ]
}  

export default rootSaga;