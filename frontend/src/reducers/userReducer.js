import { SHOW_USER, SIGN_UP_USER, LOGIN_USER } from '../constants/userConstants';

const initialState = {};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_USER:
			return '';
		case SIGN_UP_USER:
			return { user: action.user };
		case LOGIN_USER:
			return { user: action.user };
		default:
			return state;
	}
}
