import { combineEpics } from 'redux-observable';

import clearSearchResults from './clearSearchResults';
import adminAccess from './adminAccess';

const rootEpic = combineEpics(
    clearSearchResults,
    adminAccess
)
export default rootEpic