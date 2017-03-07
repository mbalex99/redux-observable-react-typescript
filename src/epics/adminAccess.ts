import { Observable } from 'rxjs'
import { ActionsObservable } from 'redux-observable'
import * as ActionTypes from '../ActionTypes';
import { Action } from 'redux'

export default function adminAccess(action$ :ActionsObservable<string>) : Observable<Action> {
    return action$.ofType(ActionTypes.CHECK_ADMIN_ACCESS)
        .delay(100)
        .mapTo(null)
}
