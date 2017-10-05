import {createStore, applyMiddleware} from 'redux';
import usersReducer from './ducks/users';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(usersReducer, applyMiddleware( promiseMiddleware() ));
