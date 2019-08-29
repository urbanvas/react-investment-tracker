import { combineReducers } from 'redux';
import investmentReducer from './investmentReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ investmentReducer, userReducer });
export default rootReducer;
