import { combineReducers } from 'redux';
import investmentReducer from './investmentReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ investmentReducer, user: userReducer });
export default rootReducer;
