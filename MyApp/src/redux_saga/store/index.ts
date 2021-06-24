import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';


import {rootSagas} from './rootSaga';

const allReducers = combineReducers({});

export type RootState = ReturnType<typeof allReducers>;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);