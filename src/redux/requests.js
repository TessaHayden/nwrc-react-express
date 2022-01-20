import * as ActionTypes from './ActionTypes';

export const Requests = (state = { isLoading: true, errMess: null, requests: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REQUESTS:
            return { ...state, errMess: null, requests: action.payload };
        case ActionTypes.REQUESTS_FAILED:
            return { ...state, errMess: action.payload };
        case ActionTypes.ADD_REQUEST:
            const request = action.payload;
            return { ...state, requests: state.requests.concat(request) };
        default:
            return state;
    }
};