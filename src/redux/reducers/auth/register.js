import { fromJS, List } from 'immutable';
import ConstantBuilder from '../../constantBuilder';
import { buildNewState } from '../../reducerStateMiddleware';
import moment from 'moment';

var initialState = fromJS({
    'data': {
        'UserAuthenticated': false,
        //'DOB': moment()  
    }
});
  
export default function registerReducer(state = initialState, action) {

    const SET_FORM = ConstantBuilder("AUTH", "REGISTER_SET_FORM");

    switch (action.type) {

        case SET_FORM:

            return state.set("data", buildNewState(state.get('data'), action.data));

        default:

            return state;
    }
}