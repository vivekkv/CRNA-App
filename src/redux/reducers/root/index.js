import { fromJS, List } from 'immutable';
import ConstantBuilder from '../../constantBuilder';
import { buildNewState } from '../../reducerStateMiddleware';
import { getLocalStorageItem } from '../../../dataStorage/asyncStorage';

var initialState = fromJS({
    'data': {
        'isAuthorized': false,
        'stateReady': false
    }
});
  
export default function rootReducer(state = initialState, action) {

    const SET_FORM = ConstantBuilder("ROOT", "SETSTATE");

    switch (action.type) {

        case SET_FORM:

            return state.set("data", buildNewState(state.get('data'), action.data));

        default:

            return state;
    }
}