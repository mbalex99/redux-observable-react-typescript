import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import userResults from './userResults'

const rootReducer = combineReducers({
    userResults,
    routing: routerReducer,
    form: formReducer
})

export default rootReducer;