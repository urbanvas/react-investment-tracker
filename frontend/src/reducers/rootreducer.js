import { combineReducers } from 'redux';
import investmentReducer from './investmentReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ investments: investmentReducer, user: userReducer });
export default rootReducer;
