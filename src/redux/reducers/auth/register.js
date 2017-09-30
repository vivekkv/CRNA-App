import { fromJS, List } from 'immutable';
import ConstantBuilder from '../../constantBuilder';
import { buildNewState } from '../../reducerStateMiddleware';
import moment from 'moment';

var initialState = fromJS({
    'data': {
        'UserAuthenticated': false,
        'DOB': moment(),
        'ApplicationNo': "asdf",
        'FirstName': "Asdf",
        "SchoolCode": "asdf"
    }  
});
  
export default function registerReducer(state = initialState, action) {

    const SET_FORM = ConstantBuilder("AUTH", "REGISTER_SET_FORM");
    const CLEAR_FORM = ConstantBuilder("AUTH", "REGISTER_CLEARFORM");

    switch (action.type) {

        case SET_FORM:

            return state.set("data", buildNewState(state.get('data'), action.data));

        case CLEAR_FORM:

            return initialState;
            //return state.set("data", state.get("data").set("DOB", null).set("ApplicationNo", null).set("FirstName", null).set("SchoolCode", null));
 
        default:

            return state;
    }
}