import * as React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import * as reducers from './reducers'
import configureStore from './configureStore'

const store = configureStore()
const history = syncHistoryWithStore(
    browserHistory,
    store
)

render(
    <Provider store={store}>
        <Router history={history}></Router>
    </Provider>,
    document.getElementById('app')
)