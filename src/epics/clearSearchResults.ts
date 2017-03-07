import * as ActionTypes from '../ActionTypes'
import { ActionsObservable, Epic } from 'redux-observable'
import { clearSearchResults, ClearResultsAction } from '../actions'
import { Action } from 'redux'
import { Observable } from 'rxjs'

export default (action$: ActionsObservable<string>) : Observable<Action>  => 
    action$.ofType(ActionTypes.CLEARED_SEARCH_RESULTS)
        .filter(action => !!!action.payload.query)
        .mapTo(clearSearchResults())

