import isAuthenticatedReducer from './isAuthenticatedReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isAuhtenticated: isAuthenticatedReducer,
    user: userReducer
});

export default allReducers;