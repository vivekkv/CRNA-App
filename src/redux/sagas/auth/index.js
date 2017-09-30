import { take, fork, select, call, put } from 'redux-saga/effects';
import registerSagas from './register';
import userInfo from './userInfo';
import { clearStorage } from '../../../dataStorage/asyncStorage'
import ConstantBuilder from '../../constantBuilder';
import ActionBuilder from '../../actionBuilder';
import { logError } from '../../../utils/errorLog';
import { navigateScreen } from '../../../utils/navigation';

const saga = function* authRootSagas() {

    yield [
        fork(registerSagas),
        fork(userInfo)
    ]
}

export default saga;  