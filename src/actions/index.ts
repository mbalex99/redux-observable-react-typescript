import * as ActionTypes from '../ActionTypes'
import { Action } from 'redux';


export interface ClearResultsAction extends Action {
    type: string
}
export function clearSearchResults(): ClearResultsAction {
    return {
        type: ActionTypes.CLEARED_SEARCH_RESULTS
    }
}

export function checkAdminAccess() : Action {
    return {
        type: ActionTypes.CHECK_ADMIN_ACCESS
    }
}

export function accessDenied() {
  return {
    type: ActionTypes.ACCESS_DENIED
  };
}