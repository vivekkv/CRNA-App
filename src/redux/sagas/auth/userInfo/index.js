import { take, fork, select, call, put } from 'redux-saga/effects';
import ActionBuilder from '../../../actionBuilder';
import ConstantBuilder from '../../../constantBuilder';
import { logError } from '../../../../utils/errorLog';
import { getLocalStorageItem } from '../../../../dataStorage/asyncStorage';
import { Map } from 'immutable';

const getStateData = (state) => Map(state.auth.userInfo.get("data"));

const userInfoInitHomePage = function* registerSaga() {

    try {

        while (true) {

            yield take(ConstantBuilder("ROOT", "PAGE_LOADED"));
            let user_token = yield call(getLocalStorageItem, "user_token");
            let isAuthorized = yield call(getLocalStorageItem, "isAuthorized");
            
            if(user_token != null && isAuthorized == true) {
                
                yield put(ActionBuilder("AUTH", "USER_INFO_SET_ITEM", { data: { 'isAuthorized': isAuthorized, 'user_token': user_token } }));
            }

        }
    }
    catch (e) {

        logError(e)
    }   
}

const saga = function* registerSagas() {

    try {
        yield [
            fork(userInfoInitHomePage)
        ]
    }
    catch (e) {

        logError(e);
    }
}

export default saga;