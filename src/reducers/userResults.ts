import * as ActionTypes from '../ActionTypes';
import { Action } from 'redux';

const initialState: any[] = [];
export default function userResults(state = initialState, action: Action){
    switch(action.type) {
        case ActionTypes.CLEARED_SEARCH_RESULTS:
            return initialState;
        default:
            return state
    }
}