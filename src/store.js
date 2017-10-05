import {createStore} from 'redux';
import usersReducer from './ducks/users';

export default createStore(usersReducer);
