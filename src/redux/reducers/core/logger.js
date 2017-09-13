import { fromJS, List } from 'immutable';

var initialState = fromJS({
    'data': {
        
    }
});

export default function lggerReducer(state = initialState, action) {

    switch (action.type) {

        default:
        
            return state;
    }
}