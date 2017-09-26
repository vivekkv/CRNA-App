import { fromJS, List } from 'immutable';
import ConstantBuilder from '../../constantBuilder';
import { buildNewState } from '../../reducerStateMiddleware';

var initialState = fromJS({
    'data': {
        'isAuthorized': false
    }
});
  
export default function userInfoReducer(state = initialState, action) {

    const SET_FORM = ConstantBuilder("AUTH", "USER_INFO_SET_ITEM");

    switch (action.type) {

        case SET_FORM:

            return state.set("data", buildNewState(state.get('data'), action.data));

        default:

            return state;
    }
}