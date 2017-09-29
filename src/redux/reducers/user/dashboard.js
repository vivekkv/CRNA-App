import { fromJS, List } from 'immutable';
import ConstantBuilder from '../../constantBuilder';
import { buildNewState } from '../../reducerStateMiddleware';
import moment from 'moment';

var initialState = fromJS({
    'data': {
        'appStatus': "Approved",
        "schoolName": "TOC H",
        "name": "Vivek",
        "className": "II"
    }
});
  
export default function dashboardReducer(state = initialState, action) {

    const SET_FORM = ConstantBuilder("USER", "DASHBOARD", "SET_FORm");

    switch (action.type) {

        case SET_FORM:

            return state.set("data", buildNewState(state.get('data'), action.data));

        default:

            return state;
    }
}