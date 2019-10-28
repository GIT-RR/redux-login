import isAuthenticatedReducer from './isAuthenticatedReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    isAuhtenticated: isAuthenticatedReducer
});

export default allReducers;