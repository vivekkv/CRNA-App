import { fromJS } from 'immutable';

var initialState = fromJS({
    'data': {
        
    }
});

export default function loggerReducer(state = initialState, action) {

    switch (action.type) {

        default:
        
            return state;
    }
}