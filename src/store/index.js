import { applyMiddleWare, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';

import licensesReducer from '../reducers/licenses';
import permissionsReducer from '../reducers/permissions';

const reducers = combineReducers({
    licensesReducer,
    permissionsReducer
});

const logger = createLogger({
    collapsed: true
});

const store = createStore(
    reducers,
    // applyMiddleWare(logger)
);

export default store;