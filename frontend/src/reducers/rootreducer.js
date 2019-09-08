import { combineReducers } from 'redux';
import { LOGOUT_USER } from '../constants/userConstants';
import investmentReducer from './investmentReducer';
import userReducer from './userReducer';

const appReducer = combineReducers({ investments: investmentReducer, user: userReducer });

const rootReducer = (state, action) => {
	if (action.type === LOGOUT_USER) {
		state = undefined;
	}

	return appReducer(state, action);
};

export default rootReducer;
