import { LOGOUT_USER, CURRENT_USER, SIGN_UP_USER, LOGIN_USER } from '../constants/userConstants';

const initialState = {};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case CURRENT_USER:
		case SIGN_UP_USER:
		case LOGIN_USER:
			return { ...action.user };
		case LOGOUT_USER:
			return initialState;
		default:
			return state;
	}
}
